// Instalar: npm install @emailjs/browser --legacy-peer-deps

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = "idle" | "loading" | "success" | "error";

interface Fields {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  mensagem: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState<Fields>({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    mensagem: "",
  });

  const overlayRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!fields.nome.trim() || !fields.email.trim() || !fields.telefone.trim() || !fields.mensagem.trim()) return;
    setFormState("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.nome,
          email: fields.email,
          empresa: fields.empresa || "—",
          reply_to: fields.telefone,
          mensagem: fields.mensagem,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormState("success");
      setFields({ nome: "", email: "", empresa: "", telefone: "", mensagem: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setFormState("error");
    }
  };

  const isDisabled =
    formState === "loading" ||
    !fields.nome.trim() ||
    !fields.email.trim() ||
    !fields.telefone.trim() ||
    !fields.mensagem.trim();

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div className="w-full max-w-md rounded-2xl border border-border bg-white shadow-2xl overflow-hidden animate-fade-up">

        {/* Header */}
        <div className="px-7 pt-6 pb-5 border-b border-border/50 bg-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Fale com a gente
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground">
                Novo Contato
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {/* Avatar Beatriz */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border/50 bg-muted/40 px-3 py-2.5">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
              style={{
                background: "linear-gradient(135deg, hsl(var(--accent-indigo)) 0%, hsl(var(--accent-rose)/0.8) 100%)",
              }}
            >
              BP
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Beatriz Paiva</p>
              <p className="text-[11px] text-muted-foreground">
                Executiva Comercial · responde em até 24h
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          {formState === "success" ? (
            <div className="flex flex-col items-center py-4 text-center">
              <span className="text-5xl">🎉</span>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                Mensagem enviada!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A Beatriz vai retornar em breve. Fique de olho no seu e-mail!
              </p>
              <button
                onClick={onClose}
                className="mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--accent-purple-red)) 0%, hsl(var(--accent-rose)) 100%)",
                }}
              >
                Fechar
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="Nome *"
                  name="nome"
                  value={fields.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                />
                <Field
                  label="Empresa"
                  name="empresa"
                  value={fields.empresa}
                  onChange={handleChange}
                  placeholder="Opcional"
                />
              </div>

              <Field
                label="E-mail *"
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />

              <Field
                label="Telefone / WhatsApp *"
                name="telefone"
                value={fields.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />

              <TextAreaField
                label="Mensagem *"
                name="mensagem"
                value={fields.mensagem}
                onChange={handleChange}
                placeholder="Conte o que você precisa..."
              />

              {formState === "error" && (
                <p className="text-center text-xs text-destructive">
                  Erro ao enviar. Tente novamente ou entre em contato diretamente.
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={isDisabled}
                className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--accent-indigo)) 0%, hsl(var(--accent-rose)/0.7) 100%)",
                }}
              >
                {formState === "loading" ? "Enviando..." : "Enviar mensagem →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

function Field({ label, name, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-[hsl(var(--accent-purple-red))]"
      />
    </div>
  );
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

function TextAreaField({ label, name, value, onChange, placeholder }: TextAreaFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="min-h-[96px] w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 font-[inherit] text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-[hsl(var(--accent-purple-red))]"
      />
    </div>
  );
}