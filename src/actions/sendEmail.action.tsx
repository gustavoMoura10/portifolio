"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(_: unknown, formData: FormData): Promise<any> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Todos os campos são obrigatórios." };
  }

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: String(process.env.MY_EMAIL),
      subject: `Novo contato de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f9; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #2c3e50; font-size: 24px; text-align: center; margin-bottom: 20px;">Você recebeu um novo contato!</h2>
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 16px; line-height: 1.5; color: #34495e;"><strong>Nome:</strong> ${name}</p>
            <p style="font-size: 16px; line-height: 1.5; color: #34495e;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; line-height: 1.5; color: #34495e;"><strong>Mensagem:</strong></p>
            <p style="font-size: 16px; line-height: 1.5; color: #34495e; background-color: #ecf0f1; padding: 10px; border-radius: 5px; margin-top: 10px;">${message}</p>
          </div>
          <div style="margin-top: 20px; text-align: center; font-size: 14px; color: #7f8c8d;">
            <p>Este é um e-mail automatizado. Não responda diretamente a esta mensagem.</p>
          </div>
        </div>
      `,
    });

    if (response.error) {
      return { success: false, message: "Erro ao enviar o email." };
    }
    return { success: true, message: "Email enviado com sucesso!" };
  } catch (error) {
    return { success: false, message: "Erro ao enviar o email." };
  }
}
