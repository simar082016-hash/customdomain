
import React from 'react';
import { Topic } from './types';

export const IAM_TOPICS: Topic[] = [
  {
    id: 'iam-concepts',
    title: 'IAM Concepts',
    icon: 'fa-shield-halved',
    subTopics: [
      {
        id: 'auth-vs-auth',
        title: 'Authentication & Authorization',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">Authentication vs Authorization</h2>
              <p className="text-slate-500 mt-2 italic text-lg">Key pillars of Identity and Access Management (IAM).</p>
            </header>

            {/* Overview Section */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
                      <i className="fa-solid fa-fingerprint text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 uppercase tracking-wide">Authentication</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Authentication is about <strong>verifying and validating the identity</strong> of the user. It is the first step in any security process.
                  </p>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                    <p className="text-sm font-bold text-blue-900">The "WHO"</p>
                    <p className="text-xs text-blue-700 italic">"Is this user really who they claim to be?"</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200">
                      <i className="fa-solid fa-shield-halved text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900 uppercase tracking-wide">Authorization</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Authorization is the process of <strong>determining what resources</strong> the user has access to. It must always follow successful authentication.
                  </p>
                  <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500">
                    <p className="text-sm font-bold text-indigo-900">The "WHAT"</p>
                    <p className="text-xs text-indigo-700 italic">"Are you allowed to do that?"</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Deep Dive into Authentication */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-id-card-clip text-blue-500"></i>
                Achieving Authentication
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Credentials", icon: "fa-key", desc: "A username or Login ID and a password." },
                  { title: "Biometrics", icon: "fa-eye", desc: "An eye-scan, fingerprint, or facial recognition." },
                  { title: "One-Time Pin", icon: "fa-hashtag", desc: "A temporary code generated for a single use." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center group hover:border-blue-300 transition-colors">
                    <i className={`fa-solid ${item.icon} text-3xl text-blue-400 mb-4 group-hover:scale-110 transition-transform`}></i>
                    <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-shield-check text-emerald-500"></i>
                  Multi-Factor Authentication (MFA)
                </h4>
                <p className="text-sm text-slate-600 mb-6">MFA increases security beyond a simple username and password by adding additional factors:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "fa-envelope", text: "One-time Password sent to an email address." },
                    { icon: "fa-mobile-screen", text: "Security code sent via text message to a phone." },
                    { icon: "fa-microchip", text: "Authentication applications that confirm the login." },
                    { icon: "fa-bell", text: "Push notifications to applications to confirm the login." }
                  ].map((factor, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100">
                      <i className={`fa-solid ${factor.icon} text-slate-400`}></i>
                      <p className="text-xs text-slate-700 font-medium">{factor.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Summary Comparison Table */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 text-center">Comparing the Processes</h3>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase text-xs w-1/4">Feature</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs">Authentication</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs">Authorization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Goal</td>
                      <td className="px-6 py-4 text-slate-700 font-medium">Identifying the user</td>
                      <td className="px-6 py-4 text-slate-700 font-medium">Determining resource access</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Timing</td>
                      <td className="px-6 py-4 text-slate-700">Done <strong>before</strong> authorization</td>
                      <td className="px-6 py-4 text-slate-700">Done <strong>after</strong> successful authentication</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">System Action</td>
                      <td className="px-6 py-4 text-slate-700">Validate identity (itself or via 3rd party)</td>
                      <td className="px-6 py-4 text-slate-700">Verify, then allow or deny access requests</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Management Concept</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold text-[10px] uppercase">Identity Management</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-bold text-[10px] uppercase">Access Management</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Refined Hotel Analogy */}
            <section className="mt-12 bg-slate-900 text-white rounded-[3rem] p-12 overflow-hidden relative shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <i className="fa-solid fa-hotel text-yellow-400"></i>
                  Analogy to understand the difference
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Step 1 */}
                  <div className="space-y-6 relative">
                    <div className="flex items-center gap-4">
                      <span className="flex-none w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">1</span>
                      <h4 className="text-xl font-bold text-blue-400">Authentication: The Check-In</h4>
                    </div>
                    <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 space-y-4">
                      <p className="text-slate-300 leading-relaxed">
                        When you check-in to a hotel, you need to <strong>present your ID</strong>. The ID determines and proves your identity.
                      </p>
                      <p className="text-slate-400 text-sm italic">
                        The front desk agent is now sure about who you are.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-6 relative">
                    <div className="flex items-center gap-4">
                      <span className="flex-none w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xl">2</span>
                      <h4 className="text-xl font-bold text-indigo-400">Authorization: The Access Card</h4>
                    </div>
                    <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 space-y-4">
                      <p className="text-slate-300 leading-relaxed">
                        Now that the hotel has identified you, you are given an <strong>access card</strong>. This card will grant you the right level of access based on your booking.
                      </p>
                      <ul className="text-sm space-y-3 text-slate-400">
                        <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-400"></i> Access your room, gym, and pool.</li>
                        <li className="flex gap-2"><i className="fa-solid fa-user-tie text-indigo-300"></i> <strong>Note:</strong> Staff members use an access card too, but they have access to more locations!</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-key absolute -right-16 -bottom-16 text-[250px] text-white/5 pointer-events-none rotate-12"></i>
            </section>
          </div>
        )
      },
      {
        id: 'sso-basics',
        title: 'Single Sign-On',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">Single Sign-On (SSO)</h2>
              <p className="text-slate-500 mt-2 italic text-lg">"One Key to Access Them All"</p>
            </header>

            {/* Overview */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <i className="fa-solid fa-magnifying-glass text-blue-500"></i>
                SSO Overview
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Single sign-on (SSO) is an <strong>authentication mechanism</strong> that enables a user to access multiple applications using a <strong>single credential</strong> (username and password).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-5 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                  <i className="fa-solid fa-circle-check text-blue-500 mt-1"></i>
                  <p className="text-sm text-slate-700 font-medium">No need to login separately to each application.</p>
                </div>
                <div className="flex items-start gap-3 p-5 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm">
                  <i className="fa-solid fa-brain text-indigo-500 mt-1"></i>
                  <p className="text-sm text-slate-700 font-medium">No need to create and remember different user credentials for each application.</p>
                </div>
              </div>
            </section>

            {/* Advantages */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-star text-yellow-500"></i>
                SSO Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Efficiency</h4>
                  <p className="text-xs text-slate-500">You spend less time managing passwords.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-user-clock"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Time Saving</h4>
                  <p className="text-xs text-slate-500">Employees save time when they don’t have to manually log in to Salesforce.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Higher Adoption</h4>
                  <p className="text-xs text-slate-500">More people use Salesforce when access is frictionless.</p>
                </div>
              </div>
            </section>

            {/* Providers */}
            <section className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-users-between-lines text-indigo-500"></i>
                Identity vs Service Providers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-xl border border-slate-800">
                  <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-id-card"></i>
                    Identity Provider (IdP)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    A <strong>trusted service</strong> that authenticates and enables users to access other external applications without logging in again.
                  </p>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">Examples</p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-mono">Okta</span>
                      <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-mono">Auth0</span>
                      <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-mono">Microsoft</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
                  <h4 className="text-xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-vault"></i>
                    Service Provider (SP)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    A service that <strong>accepts identity</strong> on behalf of the external application from an identity provider.
                  </p>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Common SPs</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono">Salesforce</span>
                      <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono">SAP</span>
                      <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono">Outlook</span>
                      <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono">Quoting Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Standards */}
            <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3">
                <i className="fa-solid fa-scroll text-blue-500"></i>
                SSO Standards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-code"></i>
                    </div>
                    <h4 className="font-bold text-slate-800">SAML</h4>
                  </div>
                  <p className="text-[10px] font-black text-orange-600 uppercase mb-2">Security Assertion Markup Language</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Uses <strong>signed XML</strong> to share identity information between Identity Provider and Service Provider.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-brackets-curly"></i>
                    </div>
                    <h4 className="font-bold text-slate-800">OpenId Connect (OIDC)</h4>
                  </div>
                  <p className="text-[10px] font-black text-indigo-600 uppercase mb-2">Built on OAuth 2.0</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Uses <strong>signed JSON</strong> to share identity information between Identity Provider and Service Provider.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )
      },
      {
        id: 'idp-sp-roles',
        title: 'Identity Provider & Service Provider',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">Identity Provider vs Service Provider</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-indigo-600">Deep dive into the roles and relationships that make SSO possible.</p>
            </header>

            {/* Core Definitions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-600 text-white rounded-xl">
                    <i className="fa-solid fa-id-card text-xl"></i>
                  </div>
                  <h4 className="font-bold text-blue-900 uppercase tracking-widest text-sm">Identity Provider (IdP)</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A <strong>trusted service</strong> that authenticates users and enables them to access other external applications without logging in again. It stores all user credentials.
                </p>
              </div>
              <div className="p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-indigo-600 text-white rounded-xl">
                    <i className="fa-solid fa-vault text-xl"></i>
                  </div>
                  <h4 className="font-bold text-indigo-900 uppercase tracking-widest text-sm">Service Provider (SP)</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A service that <strong>accepts identity confirmation</strong> on behalf of the external application from an identity provider. It trusts the IdP.
                </p>
              </div>
            </section>

            {/* The Analogy Mapping */}
            <section className="bg-slate-900 text-white rounded-[3rem] p-10 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <i className="fa-solid fa-hotel text-yellow-400"></i>
                  Mapping the Hotel Analogy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                      <h4 className="text-blue-300 font-bold mb-1">Identity Provider (The Issuer)</h4>
                      <p className="text-xs text-slate-300">In the analogy, the organization that <strong>issues your ID</strong> (e.g., the government) is the Identity Provider.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                      <h4 className="text-indigo-300 font-bold mb-1">Service Provider (The Hotel)</h4>
                      <p className="text-xs text-slate-300">The <strong>Hotel</strong> itself is the Service Provider. It doesn't issue your ID, but it <strong>trusts</strong> the issuer.</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 p-8 rounded-3xl border border-emerald-500/20 flex items-center">
                    <p className="text-sm italic text-emerald-100 leading-relaxed">
                      "Just as the hotel trusts the government-issued ID to prove who you are, a Service Provider (like Salesforce) trusts the Identity Provider (like Okta) to verify your login."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Salesforce as SP */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Salesforce as a Service Provider</h3>
              </div>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Another app authenticates users to login to Salesforce. This configuration is <strong>very common</strong> because often your company is already using a centralized Identity Provider.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">Common Providers</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Microsoft ADFS', 'OpenAM', 'Google', 'Okta'].map(p => (
                        <span key={p} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600">{p}</span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 italic mt-4">
                      Flow: Users log in at the IdP &rarr; Authenticated &rarr; Redirected back to Salesforce (the SP).
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2 text-sm">Example: Google Login</h4>
                    <p className="text-xs text-blue-700 leading-relaxed">
                      You want users to login to Salesforce using their <strong>Google usernames and passwords</strong>. In this case, Google is the IdP and Salesforce is the SP.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Salesforce as IdP */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-id-card-clip"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Salesforce as an Identity Provider</h3>
              </div>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Salesforce authenticates users to login to <strong>other applications</strong>. Salesforce acts as the source of truth and provides SSO for users to connect to different Service Providers.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2 text-sm">Example: WordPress Login</h4>
                    <p className="text-xs text-indigo-700 leading-relaxed">
                      You want users to sign on to <strong>WordPress</strong> using their Salesforce credentials. Salesforce is the IdP and WordPress is the SP.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">Setup in Salesforce</h4>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li className="flex gap-2"><i className="fa-solid fa-check text-indigo-500"></i> Done using <strong>Connected Apps</strong>.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-check text-indigo-500"></i> Enable Salesforce as an <strong>Identity Provider</strong> in Setup.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-check text-indigo-500"></i> Authenticate apps like Slack, WordPress, or RFP tools.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Comparison */}
            <section className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-inner">
               <h3 className="text-xl font-bold text-slate-800 mb-8 text-center uppercase tracking-tighter">The Handshake Relationship</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-blue-600 font-bold border-b pb-2">Salesforce as SP</h4>
                    <ul className="text-xs text-slate-600 space-y-3">
                      <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-blue-400 mt-1"></i> Relies on an external IdP for authentication.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-blue-400 mt-1"></i> <strong>Trust</strong> must be established first.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-blue-400 mt-1"></i> Users see "Login with Google/Okta" on SF login page.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-indigo-600 font-bold border-b pb-2">Salesforce as IdP</h4>
                    <ul className="text-xs text-slate-600 space-y-3">
                      <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-indigo-400 mt-1"></i> Other apps rely on Salesforce for authentication.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-indigo-400 mt-1"></i> <strong>Trust</strong> must be established first.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-indigo-400 mt-1"></i> Users see "Login with Salesforce" on SP login page.</li>
                    </ul>
                  </div>
               </div>
            </section>
          </div>
        )
      },
      {
        id: 'auth-standards',
        title: 'Authn & Authz Standards',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">Authn & Authz Standards</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-blue-600">The industry frameworks for secure identity exchange.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-orange-600 mb-2">SAML</h4>
                <p className="text-xs text-slate-500">XML-based. Enterprise SSO standard. Focuses on Authentication.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-indigo-600 mb-2">OAuth 2.0</h4>
                <p className="text-xs text-slate-500">Token-based. Standard for Authorization and delegated access.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">OIDC</h4>
                <p className="text-xs text-slate-500">Built on OAuth 2.0. Adds identity layer (Authentication).</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'authorization-tokens',
        title: 'Authorization Tokens',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">Authorization Tokens</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-emerald-600">The Modern Standard for Secure Delegated Access.</p>
            </header>

            {/* 1. Definitions (PDF Content Restored) */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <i className="fa-solid fa-ticket text-emerald-500"></i>
                  What are Tokens?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  With <strong>Authorization Tokens</strong>, after a user is authenticated, the Authorization server of the target application generates one or more <strong>Tokens</strong> for the user.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-unlock-keyhole"></i>
                      The Advantage
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Allows resource access <strong>without providing a username and a password on every request</strong>.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-clock-rotate-left"></i>
                      Limited Lifespan
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Tokens have a <strong>limited lifespan</strong>. During its life, it is used to access secure resources issued for that user.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. JWT Deep Dive (Video Content) */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-file-code text-blue-500"></i>
                The Anatomy of a Token (JWT)
              </h3>
              <p className="text-slate-600 text-sm">Most modern authorization tokens use the <strong>JSON Web Token (JWT)</strong> standard, which contains three key parts:</p>
              
              <div className="bg-slate-900 rounded-3xl p-8 font-mono text-sm overflow-hidden relative">
                <div className="space-y-4">
                  <div className="text-center md:text-left">
                    <span className="text-pink-400">header</span><span className="text-white">.</span>
                    <span className="text-emerald-400">payload</span><span className="text-white">.</span>
                    <span className="text-blue-400">signature</span>
                  </div>
                  <div className="border-t border-slate-800 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h5 className="text-pink-400 font-bold uppercase text-[10px]">1. Header</h5>
                      <p className="text-slate-400 text-[11px]">Algorithm & Token type.</p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-emerald-400 font-bold uppercase text-[10px]">2. Payload</h5>
                      <p className="text-slate-400 text-[11px]">User claims (ID, roles, exp).</p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-blue-400 font-bold uppercase text-[10px]">3. Signature</h5>
                      <p className="text-slate-400 text-[11px]">Verification of integrity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Bearer Concept (PDF Content Restored) */}
            <section className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-fingerprint text-blue-500"></i>
                Token Characteristics & Bearer Concept
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-900 p-8 rounded-3xl text-white">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Example Token Anatomy</h4>
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 mb-4">
                    <code className="text-[10px] break-all text-emerald-400">
                      6Cel800DHs000002k400818Hs000000QiXFxdFkx8ugekvFw8UFRuBgKAg89nnw5ortsiRmpmBWyk8Y6rXcepIpoAIM2yE5eWvhY9AieXt3
                    </code>
                  </div>
                  <ul className="text-xs space-y-2 text-slate-400">
                    <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-500"></i> Variable length strings.</li>
                    <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-500"></i> Encrypted or signed data payload.</li>
                    <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-500"></i> Invalidated on logout or session timeout.</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">Bearer Tokens</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    A general class of token that grants access to the <strong>party in possession</strong> of the token.
                  </p>
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 italic text-xs text-slate-700">
                    "Give access to the bearer of this token"
                  </div>
                  <p className="text-[10px] text-slate-400 mt-6">
                    <strong>Note:</strong> An Access token is a Bearer token that you must add in all request headers to access resources.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Statelessness (Video Content) */}
            <section className="bg-blue-900 text-white rounded-3xl p-8 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">The Power of Statelessness</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                      <h4 className="font-bold text-blue-300 mb-2 uppercase text-[10px]">Traditional Stateful</h4>
                      <p className="text-xs text-blue-100">Server must store every session ID in a database. Scaling is difficult.</p>
                    </div>
                    <div className="bg-emerald-500/20 p-5 rounded-2xl border border-emerald-400/30">
                      <h4 className="font-bold text-emerald-300 mb-2 uppercase text-[10px]">Modern Stateless</h4>
                      <p className="text-xs text-emerald-100">The token <strong>is</strong> the state. Server just verifies the signature. Infinite scalability!</p>
                    </div>
                  </div>
               </div>
            </section>

            {/* 5. Process Flow (PDF Content Restored) */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 text-center">Authorization Tokens Process</h3>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-bold text-slate-500 uppercase text-xs w-1/4">Step</th>
                      <th className="px-6 py-4 font-bold text-slate-500 uppercase text-xs">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-bold text-blue-600">1. Request</td>
                      <td className="px-6 py-4 text-slate-600">The user asks for access to a server or protected resource (e.g., via login).</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-blue-600">2. Verification</td>
                      <td className="px-6 py-4 text-slate-600">The server verifies the user's identity (e.g., checking password against username).</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-blue-600">3. Tokens</td>
                      <td className="px-6 py-4 text-slate-600">After verification, the server issues a token and passes it back to the user.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-blue-600">4. Storage</td>
                      <td className="px-6 py-4 text-slate-600">The token sits within the user's browser (or app storage) while work continues.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Lifecycle (Video Content) */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-arrows-rotate text-indigo-500"></i>
                Access vs. Refresh Tokens
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm border-l-4 border-l-indigo-500">
                  <h4 className="font-bold text-indigo-700 mb-2">Access Token</h4>
                  <ul className="text-xs space-y-2 text-slate-600">
                    <li>• Used to access resources.</li>
                    <li>• <strong>Short-lived</strong> (approx 15 mins).</li>
                    <li>• Exposure risk is low due to expiry.</li>
                  </ul>
                </div>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm border-l-4 border-l-emerald-500">
                  <h4 className="font-bold text-emerald-700 mb-2">Refresh Token</h4>
                  <ul className="text-xs space-y-2 text-slate-600">
                    <li>• Used to get a new Access Token.</li>
                    <li>• <strong>Long-lived</strong> (Days or Weeks).</li>
                    <li>• Keeps the user logged in seamlessly.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Comparison (PDF Content Restored) */}
            <section className="bg-slate-900 text-white rounded-3xl p-10 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Tokens vs. Username & Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="font-bold text-indigo-300 uppercase text-xs tracking-widest border-b border-indigo-800 pb-2">Traditional Credentials</h4>
                    <p className="text-sm text-indigo-100">Sending a password with every request is dangerous because:</p>
                    <ul className="text-xs space-y-3">
                      <li className="flex gap-2"><i className="fa-solid fa-triangle-exclamation text-yellow-500"></i> You'd have to store the password somewhere in the browser.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-triangle-exclamation text-yellow-500"></i> Passwords are often re-used across sessions/devices.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-triangle-exclamation text-yellow-500"></i> Higher risk if intercepted.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-emerald-400 uppercase text-xs tracking-widest border-b border-indigo-800 pb-2">The Token Solution</h4>
                    <p className="text-sm text-indigo-100">Credential exchange for tokens is superior because:</p>
                    <ul className="text-xs space-y-3">
                      <li className="flex gap-2"><i className="fa-solid fa-shield-check text-emerald-400"></i> Tokens are shorter-lived (reduced stolen token risk).</li>
                      <li className="flex gap-2"><i className="fa-solid fa-shield-check text-emerald-400"></i> When using SSO, there is <strong>no access</strong> to the Service Provider password.</li>
                      <li className="flex gap-2"><i className="fa-solid fa-shield-check text-emerald-400"></i> Represents an <strong>association</strong> between user and permissions.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-bolt absolute -right-10 -bottom-10 text-[200px] text-white/5 pointer-events-none rotate-12"></i>
            </section>
          </div>
        )
      },
      {
        id: 'saml-deep-dive',
        title: 'Security Assertion Markup Language',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">Security Assertion Markup Language (SAML)</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-blue-600">The standard for XML-based identity exchange in Enterprises.</p>
            </header>

            {/* What is SAML */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <i className="fa-solid fa-circle-info text-blue-500"></i>
                    What is SAML?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        SAML stands for <strong>Security Assertion Markup Language</strong>. It is an industry open-standard for transferring identity data between two parties.
                      </p>
                      <ul className="text-sm space-y-2 text-slate-700 font-medium">
                        <li className="flex items-center gap-2"><i className="fa-solid fa-code text-blue-500"></i> Uses <strong>XML</strong> for information exchange.</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-globe text-blue-500"></i> Uses <strong>HTTP</strong> for data transport.</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-building text-blue-500"></i> Mostly used in Enterprises.</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 border-l-4 border-l-amber-500">
                      <h4 className="font-bold text-amber-800 mb-2 uppercase text-xs">Note: Device Compatibility</h4>
                      <p className="text-xs text-amber-700 leading-relaxed italic">
                        "SAML is generally <strong>not suitable for mobile apps</strong> due to its reliance on browser redirects and heavy XML payloads."
                      </p>
                    </div>
                  </div>
               </div>
            </section>

            {/* SAML Parties */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-users-between-lines text-indigo-500"></i>
                SAML Parties
              </h3>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase text-xs w-1/4">Party</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs">Description</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs">Primary Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-bold text-blue-600">Identity Provider (IdP)</td>
                      <td className="px-6 py-4 text-slate-600">The application performing user authentication on behalf of the service. Stores all credentials.</td>
                      <td className="px-6 py-4 text-slate-600">• Receives SAML request<br/>• Sends SAML response</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-indigo-600">Service Provider (SP)</td>
                      <td className="px-6 py-4 text-slate-600">The application hosting the service the user wants to access. Trusts the IdP.</td>
                      <td className="px-6 py-4 text-slate-600">• Requests identity confirmation<br/>• Grants access to user</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SAML Request and Response */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">SAML Request</h3>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <ul className="text-xs space-y-3 text-slate-600">
                    <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-blue-400 mt-1"></i> Also known as an <strong>Authentication Request</strong>.</li>
                    <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-blue-400 mt-1"></i> Generated by the <strong>Service Provider</strong>.</li>
                    <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-blue-400 mt-1"></i> IdP checks its database after receiving this to verify the user.</li>
                  </ul>
                  <div className="mt-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">XML Schema Example</p>
                    <div className="bg-slate-900 p-4 rounded-xl font-mono text-[9px] text-blue-300 overflow-x-auto whitespace-pre">
                      {`<samlp:AuthnRequest 
  ID="ONELOGIN_12345" Version="2.0"
  IssueInstant="2014-07-16T23:52:45Z"
  Destination="http://idp.example.com/SSOService.php">
  <saml:Issuer>http://sp.example.com/metadata.php</saml:Issuer>
</samlp:AuthnRequest>`}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">SAML Response</h3>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <ul className="text-xs space-y-3 text-slate-600">
                    <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-indigo-400 mt-1"></i> Generated by the <strong>Identity Provider</strong>.</li>
                    <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-indigo-400 mt-1"></i> Contains the <strong>Assertion</strong> (The actual allow/deny result).</li>
                    <li className="flex gap-2"><i className="fa-solid fa-circle-dot text-indigo-400 mt-1"></i> Contains <strong>NameID</strong> and potentially profile/role attributes.</li>
                  </ul>
                  <div className="mt-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">XML Schema Example</p>
                    <div className="bg-slate-900 p-4 rounded-xl font-mono text-[9px] text-emerald-400 overflow-x-auto whitespace-pre">
                      {`<samlp:Response ID="..." InResponseTo="...">
  <samlp:Status>
    <samlp:StatusCode Value="...status:Success"/>
  </samlp:Status>
  <saml:EncryptedAssertion> ... [ENCRYPTED DATA] ... </saml:EncryptedAssertion>
</samlp:Response>`}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SP-initiated and IdP-initiated */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Initiation Modes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm border-t-8 border-t-blue-500">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">SP-Initiated (Common)</h4>
                  <p className="text-sm text-slate-600 mb-4">The sign-in flow begins at the <strong>Service Provider</strong> side.</p>
                  <p className="text-xs text-slate-500 italic bg-blue-50 p-3 rounded-xl">Example: You go to your company's Salesforce login page directly, which then redirects you to Okta/ADFS.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-sm border-t-8 border-t-indigo-500">
                  <h4 className="text-lg font-bold text-indigo-900 mb-3">IdP-Initiated</h4>
                  <p className="text-sm text-slate-600 mb-4">The flow begins at the <strong>Identity Provider</strong> portal.</p>
                  <p className="text-xs text-slate-500 italic bg-indigo-50 p-3 rounded-xl">Example: You log into your Google Workspace "App Launcher" and click the Salesforce icon to be logged in instantly.</p>
                </div>
              </div>
            </section>

            {/* How does SAML Authentication Work? */}
            <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
              <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">The 7-Step SAML Authentication Flow</h3>
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  { step: 1, text: "User goes to Salesforce, clicks on the SSO button to login.", actor: "User" },
                  { step: 2, text: "Salesforce responds with a SAML request.", actor: "SP" },
                  { step: 3, text: "The browser redirects the user to IdP login page (e.g. ADFS) and passes the SAML request.", actor: "Browser" },
                  { step: 4, text: "IdP parses the SAML request and authenticates the user by checking credentials.", actor: "IdP" },
                  { step: 5, text: "IdP generates the SAML response and returns it to the user's browser.", actor: "IdP" },
                  { step: 6, text: "The browser sends the generated SAML response to Salesforce which verifies it.", actor: "Browser" },
                  { step: 7, text: "If the verification succeeds, Salesforce grants the user access and logs the user in.", actor: "SP" }
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {s.step}
                      </div>
                      {idx < 6 && <div className="w-0.5 h-16 bg-blue-200 mt-2"></div>}
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{s.actor} Action</span>
                      </div>
                      <p className="text-slate-700 text-sm font-medium">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-gift text-emerald-500"></i>
                Benefits of SAML Authentication
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <i className="fa-solid fa-smile text-2xl text-emerald-600 mb-3"></i>
                  <h4 className="font-bold text-emerald-900 mb-2">Improved UX</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">Users only need to sign in one time to access multiple service providers.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <i className="fa-solid fa-shield-halved text-2xl text-blue-600 mb-3"></i>
                  <h4 className="font-bold text-blue-900 mb-2">Increased Security</h4>
                  <p className="text-xs text-blue-700 leading-relaxed">Single point of authentication at a secure identity provider.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                  <i className="fa-solid fa-money-bill-trend-up text-2xl text-indigo-600 mb-3"></i>
                  <h4 className="font-bold text-indigo-900 mb-2">Reduced Costs</h4>
                  <p className="text-xs text-indigo-700 leading-relaxed">No need to maintain account info across services; IdP bears this burden.</p>
                </div>
              </div>
            </section>

            {/* SAML in Salesforce */}
            <section className="bg-slate-900 text-white rounded-3xl p-10 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-center">SAML in Salesforce</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                    <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                      <i className="fa-solid fa-cloud-arrow-down"></i>
                      As Service Provider (SP)
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">Salesforce relies on third-party Identity Providers (like Microsoft ADFS or Okta) to authenticate its users.</p>
                    <div className="p-4 bg-white/5 rounded-xl text-xs font-mono text-slate-400 border border-white/10">
                      Setup &rarr; Single Sign-On Settings &rarr; Enable SAML
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                    <h4 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-3">
                      <i className="fa-solid fa-id-card-clip"></i>
                      As Identity Provider (IdP)
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">Salesforce acts as the source of truth, authenticating users for other external applications (like Slack or WordPress).</p>
                    <div className="p-4 bg-white/5 rounded-xl text-xs font-mono text-slate-400 border border-white/10">
                      Enable as IdP &rarr; Connected Apps &rarr; Service Provider Details
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      },
      {
        id: 'oauth-2-0',
        title: 'OAuth 2.0',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">OAuth 2.0 Framework</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-blue-600">The Industry Standard for Secure Authorization Delegation.</p>
            </header>

            {/* What is OAuth 2.0 */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <i className="fa-solid fa-diagram-project text-blue-500"></i>
                    What is OAuth 2.0?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        OAuth 2.0 is an <strong>authorization framework</strong> that allows a third-party application to obtain limited access to an HTTP service, either on behalf of a resource owner or by allowing the third-party application to obtain access on its own behalf.
                      </p>
                      <ul className="text-sm space-y-2 text-slate-700 font-medium">
                        <li className="flex items-center gap-2"><i className="fa-solid fa-shield-halved text-blue-500"></i> Controls <strong>Authorization</strong> to protected resources.</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-key text-blue-500"></i> Grants access via <strong>Tokens</strong>, not credentials.</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-rotate-left text-blue-500"></i> Tokens are <strong>Revocable</strong> by the user at any time.</li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-file-invoice text-blue-500"></i> Uses <strong>JSON Web Tokens (JWT)</strong> for exchange.</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-center justify-center">
                      <div className="text-center">
                        <i className="fa-solid fa-unlock-keyhole text-5xl text-blue-200 mb-4"></i>
                        <p className="text-sm font-semibold text-blue-900">"Delegated Authorization"</p>
                        <p className="text-[10px] text-blue-600 mt-1 uppercase tracking-widest font-bold">The Core Philosophy</p>
                      </div>
                    </div>
                  </div>
               </div>
            </section>

            {/* Roles */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-people-group text-indigo-500"></i>
                The Four Roles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { role: "Resource Owner", icon: "fa-user", desc: "The user who owns the data and grants access to it." },
                  { role: "Client", icon: "fa-laptop-code", desc: "The application requiring access to the protected resources." },
                  { role: "Authorization Server", icon: "fa-server", desc: "Issues access tokens upon successful authentication and consent." },
                  { role: "Resource Server", icon: "fa-database", desc: "Protects resources and accepts access requests via tokens." }
                ].map((r, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-indigo-300 transition-colors">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                      <i className={`fa-solid ${r.icon} text-xl`}></i>
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{r.role}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tokens & Scopes */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <i className="fa-solid fa-coins text-emerald-500"></i>
                  OAuth 2.0 Tokens
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-emerald-500">
                    <h4 className="font-bold text-slate-800 mb-1">Access Token</h4>
                    <p className="text-xs text-slate-500 mb-3">Issued to the client to access specific resources.</p>
                    <ul className="text-xs space-y-1 text-slate-600">
                      <li>• Represets specific scopes/durations.</li>
                      <li>• <strong>Short-lived</strong> (minutes/hours).</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
                    <h4 className="font-bold text-slate-800 mb-1">Refresh Token</h4>
                    <p className="text-xs text-slate-500 mb-3">Used to obtain a new access token when old one expires.</p>
                    <ul className="text-xs space-y-1 text-slate-600">
                      <li>• <strong>Never</strong> sent to resource servers.</li>
                      <li>• <strong>Long-lived</strong> (days/months/years).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <i className="fa-solid fa-eye text-amber-500"></i>
                  OAuth 2.0 Scopes
                </h3>
                <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 h-full flex flex-col">
                  <p className="text-sm text-amber-900 font-medium mb-4">Scopes are mechanisms to limit a client's access.</p>
                  <ul className="text-xs space-y-3 text-amber-800 flex-1">
                    <li className="flex gap-2"><i className="fa-solid fa-check mt-1"></i> Each Scope gives specific access/permission.</li>
                    <li className="flex gap-2"><i className="fa-solid fa-check mt-1"></i> Scopes are coded by developers during app creation.</li>
                    <li className="flex gap-2"><i className="fa-solid fa-check mt-1"></i> User sees scopes on the "Allow Access?" screen.</li>
                  </ul>
                  <div className="mt-4 p-3 bg-white/50 rounded-xl border border-amber-200">
                    <p className="text-[10px] font-bold text-amber-900 uppercase mb-2">Examples in Salesforce:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white rounded-md text-[9px] border border-amber-200 font-mono">api</span>
                      <span className="px-2 py-1 bg-white rounded-md text-[9px] border border-amber-200 font-mono">web</span>
                      <span className="px-2 py-1 bg-white rounded-md text-[9px] border border-amber-200 font-mono">refresh_token</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Flows / Grant Types */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">OAuth 2.0 Flows (Grant Types)</h3>
              <p className="text-sm text-slate-500">Grant types are different ways to obtain tokens depending on the client type.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 group hover:bg-slate-800 transition-colors">
                  <h4 className="text-blue-400 font-bold mb-2">Web Server Flow</h4>
                  <p className="text-xs text-slate-400 mb-4">Used for apps that can securely store secrets (e.g., PHP, Java apps on a server).</p>
                  <div className="p-3 bg-white/5 rounded-xl text-[10px] border border-white/10">
                    Authorization Code Grant &rarr; Server-to-Server Exchange
                  </div>
                </div>
                <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 group hover:bg-slate-800 transition-colors">
                  <h4 className="text-emerald-400 font-bold mb-2">User-Agent Flow</h4>
                  <p className="text-xs text-slate-400 mb-4">Used for apps running in a browser or mobile device (no secret storage).</p>
                  <div className="p-3 bg-white/5 rounded-xl text-[10px] border border-white/10">
                    Implicit Grant &rarr; Token returned directly to Browser
                  </div>
                </div>
                <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 group hover:bg-slate-800 transition-colors">
                  <h4 className="text-indigo-400 font-bold mb-2">Token Exchange Flow</h4>
                  <p className="text-xs text-slate-400 mb-4">Exchange tokens from external identity providers for Salesforce tokens.</p>
                  <div className="p-3 bg-white/5 rounded-xl text-[10px] border border-white/10">
                    Simplifies Microservices & Hybrid Architectures
                  </div>
                </div>
                <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 group hover:bg-slate-800 transition-colors">
                  <h4 className="text-amber-400 font-bold mb-2">Hybrid App Flow</h4>
                  <p className="text-xs text-slate-400 mb-4">Managing web sessions within mobile apps using user-agent or refresh flows.</p>
                  <div className="p-3 bg-white/5 rounded-xl text-[10px] border border-white/10">
                    Complex but powerful for Native + Web views
                  </div>
                </div>
              </div>
            </section>

            {/* Not an Auth Protocol */}
            <section className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-inner">
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-8 flex items-center justify-center gap-3">
                <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                OAuth 2.0 is NOT Authentication
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    OAuth is an <strong>authorization delegation protocol</strong>. It deals with <strong>permissions</strong>, not identity.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-2xl space-y-4">
                    <div className="flex gap-4">
                      <div className="text-blue-600 font-bold">Authentication</div>
                      <div className="text-slate-500 italic">= "WHO"</div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-indigo-600 font-bold">Authorization</div>
                      <div className="text-slate-500 italic">= "WHAT"</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    While SAML assertions answer the "WHO", OAuth access tokens only answer "WHAT access do you have?". <strong>OpenID Connect (OIDC)</strong> adds the identity layer on top of OAuth.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-slate-900 rounded-3xl p-6 text-white text-[11px] leading-relaxed shadow-xl">
                    <h5 className="font-bold text-red-400 mb-2 uppercase tracking-widest text-[10px]">Pseudo-Authentication Risk</h5>
                    <p className="mb-3">Treating an OAuth Access Token as proof of identity is dangerous. An attacker could present a valid token they stole to "prove" they are the user.</p>
                    <p className="text-emerald-400 font-bold">Solution: OpenID Connect (OIDC)</p>
                    <p>Adds an <strong>ID Token</strong> containing user info, cryptographically signed to prevent spoofing.</p>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 border-4 border-white shadow-lg">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                </div>
              </div>
            </section>

            {/* OAuth 2.0 in Salesforce */}
            <section className="bg-blue-600 text-white rounded-3xl p-10 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">OAuth 2.0 in Salesforce</h3>
                  <p className="text-blue-100 mb-8 max-w-2xl">Salesforce provides a robust implementation of OAuth 2.0 to allow external applications to access its resources securely.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-link"></i>
                        Connected Apps
                      </h4>
                      <p className="text-xs text-blue-50 leading-relaxed">
                        The primary way to integrate external applications. You define the <strong>Client Secret</strong>, <strong>Callback URL</strong>, and <strong>OAuth Scopes</strong> here.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-globe"></i>
                        External Client Apps
                      </h4>
                      <p className="text-xs text-blue-50 leading-relaxed">
                        A newer alternative to Connected Apps designed for decoupled metadata and better packaging/deployment flexibility.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                    <p className="text-xs font-mono opacity-80">Setup &rarr; App Manager &rarr; New Connected App &rarr; Enable OAuth Settings</p>
                  </div>
               </div>
               <i className="fa-solid fa-cloud absolute -right-12 -bottom-12 text-[200px] text-white/5 pointer-events-none"></i>
            </section>
          </div>
        )
      },
      {
        id: 'openid-connect',
        title: 'OpenID Connect',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">OpenID Connect (OIDC)</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-indigo-600 italic">Authentication Layer built on top of OAuth 2.0.</p>
            </header>

            {/* History Timeline */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-clock-rotate-left text-blue-500"></i>
                OIDC History
              </h3>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-bold text-slate-500 uppercase text-xs w-24">Year</th>
                      <th className="px-6 py-4 font-bold text-slate-500 uppercase text-xs">Standard</th>
                      <th className="px-6 py-4 font-bold text-slate-500 uppercase text-xs">Significance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-400">2006</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">OpenID 1.0</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">Proved End User ownership of Identity URL via authority proof.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-400">2007</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">OpenID 2.0</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">Enhanced version of OpenID 1.0.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-400">2010</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">OAuth 1.0</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">Method to authorize clients without sharing credentials.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-400">2012</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">OAuth 2.0</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">Major enhancement keeping OAuth 1.0 functionality.</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="px-6 py-4 font-bold text-blue-600">2014</td>
                      <td className="px-6 py-4 font-bold text-blue-800">OpenID Connect</td>
                      <td className="px-6 py-4 text-blue-700 text-xs">Combines features of OpenID 2.0, Attribute Exchange 1.0, and OAuth 2.0.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* OIDC and OAuth 2.0 Relationship */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <i className="fa-solid fa-layer-group text-indigo-500"></i>
                  OIDC vs OAuth 2.0
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  OpenID Connect uses <strong>OAuth 2.0</strong> as its underlying protocol. It essentially "hacks" OAuth to provide <strong>Identity</strong>.
                </p>
                <ul className="text-xs space-y-4 text-slate-700">
                  <li className="flex gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <i className="fa-solid fa-plus-circle text-indigo-500 mt-1"></i>
                    <div>
                      <span className="font-bold">Extra Token:</span> Adds the <strong>ID Token</strong> which encapsulates identity claims in JSON format.
                    </div>
                  </li>
                  <li className="flex gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <i className="fa-solid fa-bullseye text-indigo-500 mt-1"></i>
                    <div>
                      <span className="font-bold">Shift in Focus:</span> Moves emphasis from <strong>Authorization</strong> (What) to <strong>Authentication</strong> (Who).
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900 p-8 rounded-[3rem] text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center border-4 border-blue-500/50 shadow-2xl">
                    <span className="text-white font-black text-xl">OAuth 2.0</span>
                  </div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full flex items-center justify-center border-4 border-indigo-400/50 shadow-xl opacity-90 animate-pulse">
                    <span className="text-white font-bold text-xs">OIDC Layer</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">The Identity Extension</p>
              </div>
            </section>

            {/* Parties & Tokens */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Parties and Tokens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase text-xs">The Parties</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <p className="text-xs font-bold text-blue-900">OpenID Provider (OP)</p>
                      <p className="text-[10px] text-blue-700">Equivalent to an IdP. Performs authentication and issues tokens.</p>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-xl">
                      <p className="text-xs font-bold text-indigo-900">Relying Party (RP)</p>
                      <p className="text-[10px] text-indigo-700">Equivalent to an SP. The client requesting the identity.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase text-xs">The ID Token</h4>
                  <p className="text-xs text-slate-600 mb-4">The core addition of OIDC. It provides information about the authentication outcome.</p>
                  <ul className="text-[10px] space-y-2 text-slate-500">
                    <li>• Contains <strong>Claims</strong> (user profile data).</li>
                    <li>• <strong>Digitally Signed</strong> to prevent tampering.</li>
                    <li>• Can be encrypted for privacy.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Vendor Support */}
            <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Modern Adoption</h3>
              <p className="text-sm text-slate-500 mb-8 italic">"The modern authentication answer to most SAML use cases."</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Google', 'Microsoft', 'GitHub', 'PayPal', 'Facebook', 'Yahoo'].map(vendor => (
                  <div key={vendor} className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm text-xs font-bold text-slate-600 flex items-center gap-2">
                    <i className={`fa-brands fa-${vendor.toLowerCase()}`}></i>
                    {vendor}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[11px] text-slate-400 max-w-lg mx-auto leading-relaxed">
                OpenID Connect is suitable for <strong>mobile apps</strong> and browser-based applications because it leverages the lightweight JWT standard and OAuth flows.
              </p>
            </section>

            {/* Comparison Table */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 text-center">SAML vs OpenID Connect</h3>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase text-xs w-1/4">Feature</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs w-3/8">SAML</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs w-3/8">OpenID Connect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px]">Transport</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">XML Based</td>
                      <td className="px-6 py-4 text-indigo-600 text-xs font-semibold">JWT Based (JSON)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px]">Auth Context</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">Assertions on XML response</td>
                      <td className="px-6 py-4 text-indigo-600 text-xs font-semibold">Claims in ID Token</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px]">Device Support</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">Browser-based; lacks native mobile SSO</td>
                      <td className="px-6 py-4 text-indigo-600 text-xs font-semibold">APIs, Mobile Native, Browser apps</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px]">Ease of Use</td>
                      <td className="px-6 py-4 text-slate-600 text-xs">Flexible but complex</td>
                      <td className="px-6 py-4 text-indigo-600 text-xs font-semibold">Easier for developers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* OIDC in Salesforce */}
            <section className="bg-indigo-900 text-white rounded-[3rem] p-10 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">OpenID Connect in Salesforce</h3>
                  <p className="text-indigo-200 mb-10 max-w-2xl">Salesforce seamlessly integrates OIDC to both act as a Provider and consume external identities.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2 text-blue-300">
                        <i className="fa-solid fa-user-shield"></i>
                        Consuming OIDC
                      </h4>
                      <p className="text-sm text-indigo-100 leading-relaxed mb-6">Salesforce relies on third-party OpenID Providers (Google, GitHub, Apple) via <strong>Auth. Providers</strong>.</p>
                      <div className="p-4 bg-white/5 rounded-xl text-[11px] border border-white/10">
                        Setup &rarr; Auth. Providers &rarr; Choose Provider Type
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                      <h4 className="text-xl font-bold mb-3 flex items-center gap-2 text-emerald-300">
                        <i className="fa-solid fa-id-card"></i>
                        Acting as Provider
                      </h4>
                      <p className="text-sm text-indigo-100 leading-relaxed mb-6">Salesforce acts as the OpenID Provider for other external applications using <strong>Connected Apps</strong>.</p>
                      <div className="p-4 bg-white/5 rounded-xl text-[11px] border border-white/10">
                        Connected App &rarr; OAuth Settings &rarr; Scope: openid
                      </div>
                    </div>
                  </div>
               </div>
               <i className="fa-solid fa-id-badge absolute -right-12 -bottom-12 text-[200px] text-white/5 pointer-events-none -rotate-12"></i>
            </section>
          </div>
        )
      },
      {
        id: 'difference-oidc-saml',
        title: 'Difference between OIDC and SAML',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">SAML vs. OpenID Connect</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-rose-600 italic">Choosing the right protocol for your Identity Strategy.</p>
            </header>

            {/* Conceptual Comparison Diagram */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
               <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Who vs What?</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                  <div className="flex flex-col items-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100 relative">
                    <div className="p-4 bg-emerald-500 text-white rounded-full mb-4 shadow-lg shadow-emerald-200">
                      <i className="fa-solid fa-user-check text-xl"></i>
                    </div>
                    <h4 className="font-bold text-emerald-900 mb-1">SAML</h4>
                    <p className="text-[10px] text-emerald-600 uppercase font-black tracking-widest mb-4">Authentication</p>
                    <p className="text-xs text-emerald-800 font-bold text-center">Answers: WHO are you?</p>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-amber-50 rounded-2xl border border-amber-100 relative">
                    <div className="p-4 bg-amber-500 text-white rounded-full mb-4 shadow-lg shadow-amber-200">
                      <i className="fa-solid fa-key text-xl"></i>
                    </div>
                    <h4 className="font-bold text-amber-900 mb-1">OAuth 2.0</h4>
                    <p className="text-[10px] text-amber-600 uppercase font-black tracking-widest mb-4">Authorization</p>
                    <p className="text-xs text-amber-800 font-bold text-center">Answers: WHAT can you do?</p>
                  </div>

                  <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-2xl border border-indigo-200 border-2 relative scale-105 shadow-xl shadow-indigo-100">
                    <div className="p-4 bg-indigo-600 text-white rounded-full mb-4 shadow-lg shadow-indigo-300">
                      <i className="fa-solid fa-circle-nodes text-xl"></i>
                    </div>
                    <h4 className="font-bold text-indigo-900 mb-1">OpenID Connect</h4>
                    <p className="text-[10px] text-indigo-600 uppercase font-black tracking-widest mb-4">Both Combined</p>
                    <p className="text-xs text-indigo-800 font-bold text-center">Answers: BOTH!</p>
                  </div>
               </div>
            </section>

            {/* Detailed Technical Table */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Detailed Technical Comparison</h3>
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase text-xs w-1/4">Feature</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs">SAML</th>
                      <th className="px-6 py-4 font-bold uppercase text-xs">OpenID Connect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Parties</td>
                      <td className="px-6 py-4 text-slate-700">IdP (Identity Provider)<br/>SP (Service Provider)</td>
                      <td className="px-6 py-4 text-slate-700 font-medium">OP (OpenID Provider)<br/>RP (Relying Party)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Format</td>
                      <td className="px-6 py-4 text-slate-700">Uses <strong>XML</strong> for Info Exchange</td>
                      <td className="px-6 py-4 text-slate-700 font-medium">Uses <strong>JWT (JSON)</strong> for Info Exchange</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Auth Info</td>
                      <td className="px-6 py-4 text-slate-700">Assertion in the SAML Response (XML)</td>
                      <td className="px-6 py-4 text-slate-700 font-medium">ID Token (Signed JSON Web Token)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Complexity</td>
                      <td className="px-6 py-4 text-slate-700 italic">More complex (XML, heavy metadata)</td>
                      <td className="px-6 py-4 text-slate-700 font-medium italic">Generally simpler (JSON, HTTPS flows)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Maturity</td>
                      <td className="px-6 py-4 text-slate-700">Older/Mature (Created in 2003)</td>
                      <td className="px-6 py-4 text-slate-700 font-medium">Newer/Evolving (Created in 2014)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-slate-500">Main Use Case</td>
                      <td className="px-6 py-4 text-slate-700">Enterprise and Government apps</td>
                      <td className="px-6 py-4 text-slate-700 font-medium">Web, Mobile, and API applications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Summary Guidance Card */}
            <section className="bg-slate-900 rounded-[3rem] p-12 text-white text-center relative overflow-hidden">
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">When to choose which?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-building"></i>
                        Choose SAML if...
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        You are in a heavy enterprise environment, need strict security assertions for government or legacy systems, and primarily work with browser-based session SSO.
                      </p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <h4 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        Choose OIDC if...
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        You are building modern web or native mobile apps, need API-level access control, or want an easier developer experience with JSON-based tokens.
                      </p>
                    </div>
                  </div>
               </div>
               <i className="fa-solid fa-arrows-left-right absolute -left-10 -bottom-10 text-[200px] text-white/5 pointer-events-none rotate-12"></i>
            </section>
          </div>
        )
      },
      {
        id: 'establishing-trust',
        title: 'Establishing trust (IDP & SP)',
        content: (
          <div className="space-y-12 pb-12">
            <header className="border-b pb-4">
              <h2 className="text-3xl font-bold text-slate-800">Establishing Trust</h2>
              <p className="text-slate-500 mt-2 italic text-lg text-blue-600">The "Handshake" that secures your Identity ecosystem.</p>
            </header>

            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <p className="text-slate-600 leading-relaxed text-sm italic border-l-4 border-blue-500 pl-4">
                Before SSO can occur, a trust relationship must be manually established between the Identity Provider and the Service Provider. This is typically a one-time setup.
              </p>
            </section>

            {/* SAML Trust Section */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-handshake-simple text-blue-500"></i>
                Trust for SAML
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm group hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-blue-900 mb-4 uppercase text-xs tracking-widest bg-blue-50 p-2 rounded-lg inline-block">Salesforce as SAML Service Provider</h4>
                  <ul className="text-xs space-y-3 text-slate-600">
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-blue-400 mt-0.5"></i> <span>Get <strong>IdP metadata and cert</strong> from external provider.</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-blue-400 mt-0.5"></i> <span>Setup &rarr; Single Sign-On, enable SAML (one time).</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-blue-400 mt-0.5"></i> <span>Create a Salesforce <strong>self-signed cert</strong>.</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-blue-400 mt-0.5"></i> <span>Configure SAML SSO using IdP metadata, IdP cert, and Salesforce cert.</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-blue-400 mt-0.5"></i> <span>Send Salesforce metadata and cert back to the IdP.</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-blue-400 mt-0.5"></i> <span>Add SAML SSO Setting to login screen.</span></li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-indigo-100 shadow-sm group hover:border-indigo-300 transition-colors">
                  <h4 className="font-bold text-indigo-900 mb-4 uppercase text-xs tracking-widest bg-indigo-50 p-2 rounded-lg inline-block">Salesforce as SAML Identity Provider</h4>
                  <ul className="text-xs space-y-3 text-slate-600">
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-indigo-400 mt-0.5"></i> <span>Enable Salesforce as an <strong>Identity Provider</strong> and generate a certificate.</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-indigo-400 mt-0.5"></i> <span>Get the <strong>Service Provider information</strong> (ACS URL, Entity ID).</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-indigo-400 mt-0.5"></i> <span>Create a <strong>Connected App</strong> with "Enable SAML" checked.</span></li>
                    <li className="flex gap-2 items-start"><i className="fa-solid fa-circle-check text-indigo-400 mt-0.5"></i> <span>Share the <strong>Salesforce IdP metadata</strong> with the Service Provider.</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* OIDC Trust Section */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <i className="fa-solid fa-key text-indigo-500"></i>
                Trust for OpenID Connect
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">Salesforce as OIDC Relying Party (SP)</h4>
                  <ul className="text-xs space-y-4 text-slate-600">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px]">1</div>
                      <span>Define an <strong>OpenID Connect Auth. Provider</strong> in Salesforce Setup.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px]">2</div>
                      <span>Update your external app to use the <strong>callback URL</strong> generated by Salesforce.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px]">3</div>
                      <span>Add Auth. Provider to login screen via <strong>My Domain</strong> settings.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">Salesforce as OIDC OpenID Provider (IdP)</h4>
                  <ul className="text-xs space-y-4 text-slate-600">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px]">1</div>
                      <span>Get <strong>Relying Party information</strong> (Callback URL).</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px]">2</div>
                      <span>Create a <strong>Connected App</strong> with OAuth settings.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px]">3</div>
                      <span>Include the <strong>openid</strong> scope and enable "Configure ID token".</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px]">4</div>
                      <span>Share the <strong>OpenID Provider metadata</strong> (Discovery Endpoint) with the Relying Party.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Visual Guide Footnote */}
            <section className="bg-blue-900 text-white rounded-3xl p-8 relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                    <i className="fa-solid fa-magnifying-glass text-3xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Configuration Tip</h4>
                    <p className="text-sm text-blue-100 opacity-80">
                      Metadata is the universal language for trust. It contains all URLs and Public Keys required for the "handshake" to succeed. Always verify certificates before they expire!
                    </p>
                  </div>
               </div>
            </section>
          </div>
        )
      }
    ]
  }
];
