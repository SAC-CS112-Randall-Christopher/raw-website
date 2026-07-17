"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("ready");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-note">
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
      <button className="button button-primary" type="submit">Request an initial conversation</button>
      <p id="form-note" className="form-note">
        This private-stage form does not transmit information yet. Delivery will be connected to a client-owned form service before public launch.
      </p>
      {status === "ready" && (
        <p className="form-status" role="status">The form is working as designed. Secure delivery will be enabled before the public launch.</p>
      )}
    </form>
  );
}
