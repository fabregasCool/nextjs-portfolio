"use client";
import { useForm } from "react-hook-form";

// 🔶 On définit un type strict pour les données du formulaire
type ContactFormData = {
  nom: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  // ✅ On précise le type ici
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    alert("Message envoyé : " + JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-4"
    >
      <input
        {...register("nom")}
        placeholder="Votre nom"
        className="border p-2 w-full"
      />
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="border p-2 w-full"
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Envoyer
      </button>
    </form>
  );
}
