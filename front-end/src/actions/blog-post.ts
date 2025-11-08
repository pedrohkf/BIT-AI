import axios from "axios";
import { BlogFormData } from "@/types/blog";

export async function postBlog(data: BlogFormData, userId: string) {
  try {
    const payload = { ...data, userId };

    const response = await axios.post(
      "https://bit-ai-orcin.vercel.app/blogs/add",
      payload,
      {
        headers: { "Content-Type": "application/json" },
        timeout: 5000,
      }
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message;
      console.error("Erro em postBlog:", message);
      throw new Error(message);
    }

    console.error("Erro inesperado em postBlog:", error);
    throw new Error("Falha na requisição.");
  }
}