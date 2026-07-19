"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mpqvpoza";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-note">
      <input type="hidden" name="_subject" value="New Randall Automation Works website inquiry" />
      <label className="form-honeypot" aria-hidden="true">
        Leave this field empty
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>
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
            <option>AI systems, agents and training</option>
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
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request an initial conversation"}
      </button>
      <p id="form-note" className="form-note">
        Your inquiry is delivered securely to Randall Automation Works. You can also contact Chris directly by email or phone.
      </p>
      {status === "success" && (
        <p className="form-status" role="status">Thank you—your message was sent successfully. Chris will follow up as soon as practical.</p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          The message could not be sent. Please email <a href="mailto:Chris@randallautomationworks.com">Chris@randallautomationworks.com</a> or call <a href="tel:+19707872161">(970) 787-2161</a>.
        </p>
      )}
    </form>
  );
}
