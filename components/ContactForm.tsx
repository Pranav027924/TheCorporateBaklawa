"use client";

import { useState } from "react";
import { formOptions, site, waLink } from "@/lib/data";
import styles from "./ContactForm.module.css";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  occasion: string;
  quantity: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  occasion: "",
  quantity: "",
  message: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  /* Required: Name, Message, and at least one of Email/Phone (PRD §4.11) */
  const validate = (): Errors => {
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.email.trim() && !fields.phone.trim()) {
      next.email = "Provide an email or phone number so we can reach you.";
    } else if (fields.email.trim() && !emailRe.test(fields.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!fields.message.trim())
      next.message = "Tell us a little about your requirement.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    /* Build a prefilled WhatsApp message and open the chat (PRD §4.11 / WhatsApp-first) */
    const lines = [
      "New gifting inquiry from the website:",
      `Name: ${fields.name}`,
      fields.company && `Company: ${fields.company}`,
      fields.email && `Email: ${fields.email}`,
      fields.phone && `Phone: ${fields.phone}`,
      fields.industry && `Industry: ${fields.industry}`,
      fields.occasion && `Occasion: ${fields.occasion}`,
      fields.quantity && `Estimated Quantity: ${fields.quantity}`,
      "",
      `Requirements: ${fields.message}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`${styles.card} ${styles.success} container`} role="status">
        <span className={styles.diamond} aria-hidden="true">
          ◆
        </span>
        <h3 className={styles.successTitle}>Thank you — your inquiry is on its way</h3>
        <p className={styles.successNote}>
          We&apos;ve opened WhatsApp with your details prefilled. If it didn&apos;t
          open, message us directly at{" "}
          <a className={styles.successLink} href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          and our team will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={`${styles.card} container`}>
      <form
        id="quote-form"
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
      >
        <h3 className={styles.formTitle}>Request a Quote</h3>

        <div className={styles.row}>
          <Field
            id="name"
            label="Name"
            required
            value={fields.name}
            onChange={update("name")}
            error={errors.name}
          />
          <Field
            id="company"
            label="Company Name"
            value={fields.company}
            onChange={update("company")}
          />
        </div>

        <div className={styles.row}>
          <Field
            id="email"
            label="Email"
            type="email"
            value={fields.email}
            onChange={update("email")}
            error={errors.email}
            autoComplete="email"
          />
          <Field
            id="phone"
            label="Phone Number"
            type="tel"
            value={fields.phone}
            onChange={update("phone")}
            autoComplete="tel"
          />
        </div>

        <div className={styles.row}>
          <SelectField
            id="industry"
            label="Industry"
            value={fields.industry}
            onChange={update("industry")}
            options={formOptions.industries}
            placeholder="Select an industry"
          />
          <SelectField
            id="occasion"
            label="Gifting Occasion"
            value={fields.occasion}
            onChange={update("occasion")}
            options={formOptions.occasions}
            placeholder="Select an occasion"
          />
        </div>

        <div className={styles.row}>
          <Field
            id="quantity"
            label="Estimated Quantity"
            type="number"
            placeholder="e.g. 50"
            value={fields.quantity}
            onChange={update("quantity")}
          />
          <span className={styles.spacer} aria-hidden="true" />
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Message / Requirements <span className={styles.req}>*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            className={`${styles.input} ${styles.textarea} ${
              errors.message ? styles.inputError : ""
            }`}
            value={fields.message}
            onChange={update("message")}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className={styles.error} role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" className={`${styles.submit} btn btn-primary`}>
          Send Inquiry
        </button>
      </form>
    </div>
  );
}

/* --- Small field primitives --- */
function Field({
  id,
  label,
  required,
  error,
  type = "text",
  ...rest
}: {
  id: keyof Fields;
  label: string;
  required?: boolean;
  error?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label} {required && <span className={styles.req}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  options,
  placeholder,
  ...rest
}: {
  id: keyof Fields;
  label: string;
  options: string[];
  placeholder: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} className={`${styles.input} ${styles.select}`} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
