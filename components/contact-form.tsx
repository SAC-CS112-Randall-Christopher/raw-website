"use client";

import { FormEvent, useState } from "react";

const contactEmail = "Chris@randallautomationworks.com";
const contactEmailLink = `mailto:${contactEmail}`;
const contactPhone = "(970) 787-2161";
const contactPhoneLink = "tel:+19707872161";
const formEndpoint = "https://formspree.io/f/mpqvpoza";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus("submitting");

    try {
      const formData = new FormData(form);
      formData.set("_subject", "New Randall Automation Works website inquiry");
      formData.set("_gotcha", "");

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} action={formEndpoint} method="POST" aria-describedby="form-note">
      <div className="form-row">
        <label>
          Name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Organization
          <input name="organization" autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="form-row">
        <label>
          I’m interested in
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Workflow or AI readiness assessment</option>
            <option>Small automation pilot</option>
            <option>Reporting or document automation</option>
            <option>Internal knowledge system</option>
            <option>GIS or field operations</option>
            <option>Responsible AI and training</option>
            <option>Managed AI support</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Location
          <select name="location" defaultValue="Western Colorado">
            <option>Western Colorado</option>
            <option>Elsewhere in Colorado</option>
            <option>Outside Colorado</option>
          </select>
        </label>
      </div>
      <label>
        What process or problem would you like to improve? <span aria-hidden="true">*</span>
        <textarea name="message" rows={6} required placeholder="Describe the recurring task, handoff, report or information problem you have in mind." />
      </label>
      <label className="consent">
        <input name="consent" type="checkbox" required />
        <span>I agree that the information provided may be used to respond to this inquiry. Please do not include passwords, protected records or sensitive operational data.</span>
      </label>
      <input name="_subject" type="hidden" value="New Randall Automation Works website inquiry" />
      <input className="honeypot" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button button-primary" type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request an initial conversation"}
      </button>
      <p id="form-note" className="form-note">
        We typically respond within one business day. For urgent matters, reach out directly by email or phone.
      </p>
      {status === "submitting" && (
        <p className="form-status form-status-submitting" role="status">Sending your message now.</p>
      )}
      {status === "success" && (
        <p className="form-status form-status-success" role="status">Thanks for reaching out. We’ll follow up soon.</p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          We couldn’t send the message right now. Please email <a href={contactEmailLink}>{contactEmail}</a> or call <a href={contactPhoneLink}>{contactPhone}</a>.
        </p>
      )}
    </form>
  );
}
