"use client";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert("Message envoyé : " + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <input {...register("nom")} placeholder="Votre nom" className="border p-2 w-full" />
      <input {...register("email")} placeholder="Email" className="border p-2 w-full" />
      <textarea {...register("message")} placeholder="Message" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Envoyer</button>
    </form>
  );
}
