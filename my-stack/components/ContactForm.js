"use client";

import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

const REASON_OPTIONS = ["Hiring", "Collaboration", "Just saying hi", "Other"];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setEntries(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      reason: reason || null,
      company: company || null,
      message,
    });

    if (!error) {
      setName("");
      setEmail("");
      setReason("");
      setCompany("");
      setMessage("");
      setSuccess(true);
      await fetchEntries();
    }

    setLoading(false);
  }

  return (
    <div className="space-y-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-purple transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-purple transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Reason</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-white text-sm focus:outline-none focus:border-accent-purple transition-colors"
            >
              <option value="">Select a reason</option>
              {REASON_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-purple transition-colors"
              placeholder="Your company (optional)"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Message *
          </label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-accent-purple transition-colors resize-none"
            placeholder="Write your message here..."
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 rounded-lg bg-accent-purple text-[#0a0a0f] font-semibold text-sm hover-btn-cycle border border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && (
            <p className="text-sm text-accent-green">
              Message sent successfully!
            </p>
          )}
        </div>
      </form>

      {/* Entries List */}
      {entries.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            <span className="text-accent-blue">#</span> Submissions
          </h3>
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="p-5 rounded-xl border border-slate-800 bg-slate-900/30"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-white">
                    {entry.name}
                  </span>
                  <span className="text-xs text-slate-600">{entry.email}</span>
                  {entry.reason && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-accent-purple">
                      {entry.reason}
                    </span>
                  )}
                  {entry.company && (
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-accent-blue">
                      {entry.company}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {entry.message}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  {new Date(entry.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
