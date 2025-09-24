<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
<style>
a {
  color: #2e7d32;
  text-decoration: none; /* Remove underline */
  font-family: 'FiraCode', monospace;
}

a:hover {
  color: #F5B041; /* Change color on hover */
}
body {
  font-family: 'FiraCode', monospace;
  max-height:1024px;
}

.contact-info {
  flex: 1;
}
.contact-info strong {
  font-family: FiraCode;
  font-size: 14px;
}
.qr-codes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: FiraCode;
  font-size: 12px;
}
.qr-pair div div {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
}
.intro {
  text-align: center;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.intro h2.roles {
  font-size: 1.25rem;
  font-weight: normal;
  color: #444;
}

.intro i {
  margin-left: 0.3em;
  color: #2e7d32; /* акцент — зелёный/тёмный */
}
</style>
<img src="I1.jpg" width="300" style="display:block;margin-left:auto;margin-right:auto;" >

<strong style="display: block;
    font-family: FiraCode;
    font-size: 24px; 
    margin: 0px 0px 0px 0px;
    text-align:left;
    white-space: nowrap;"
>
<section class="intro">
<h1>  Arsentii Karpov <i class="fas fa-battery-full"></i></h1>
<h2 class="roles">
Android Developer <i class="fa-brands fa-android"></i>
&nbsp;|&nbsp; Fullstack <i class="fa-solid fa-layer-group"></i>
&nbsp;|&nbsp; Teamlead <i class="fa-solid fa-users-gear"></i>
</h2>
</section>
</strong>
<div class="contact-block" style="display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; margin-top: 0px; padding-left: 30px;padding-top: 20px;padding-bottom: 10px; margin-right:20px; border-radius: 12px; background-color: #f9f9f9; border: 1px solid #ddd;">
<div class="contact-info">
<p style="font-size: 1.1em; margin-top: 0px;"><strong>Telegram: </strong><a href="https://t.me/arsengizer" style="color: #2d8f2d;">@arsengizer</a></p>
<p style="font-size: 1.1em;"><strong>Email: </strong><a href="mailto:arsentiy.karpov@gmail.com" style="color: #2d8f2d;">arsentiy.karpov@gmail.com</a></p>
<p style="font-size: 1.1em;"><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/arsentiy-karpov-4171a859" style="color: #2d8f2d;">https://www.linkedin.com/in/arsentiy-karpov-4171a859</a></p>
</div>
<div class="qr-pair" style="display: flex; gap: 20px;padding-right: 30px;">
<div style="text-align: center;">
<img src="telegram_qr.png" alt="Telegram QR" width="100" height="100" style="border: 1px solid #ccc; border-radius: 0px;padding-bottom: 2px;">
<div>Telegram</div>
</div>
<div style="text-align: center;">
<img src="email_qr.png" alt="Email QR" width="100" height="100" style="border: 1px solid #ccc; border-radius: 0px; padding-bottom: 2px;">
<div> Email</div>
</div>
<div style="text-align: center;">
<img src="linkedin_qr.png" alt="LinkedIn QR" width="100" height="100" style="border: 1px solid #ccc; border-radius: 0px;padding-bottom: 2px;">
<div>LinkedIn</div>
</div>
</div>
</div>
<div style="page-break-after: always;"></div>
<img src="qiwi.png" height="20px"/>**iwi Wallet**.(2013-->2024)
*Android Developer-->Android Team Lead*

**Status:** App [still available in store](https://play.google.com/store/apps/details?id=ru.mw&hl=en-US) despite government license revocation in 2024

######  Android Evolution

As an Android Developer, I’ve gone from working with Loaders and AsyncTask to RxJava (all major versions) and now use Kotlin Multiplatform


###### Key Contributions

- Joined Qiwi in March 2013 as the second Android developer
- Helped build and launch the first production versions of Qiwi Wallet
- Promoted to Android Team Lead in 2016



######  Visa payWave (Contactless Payments)

- Launched Visa payWave integration via Host Card Emulation (HCE)  
- Developed the full [smartphone] ⟷ [POS terminal] protocol from scratch
- Enabled in-app issuance of tokenized cards for NFC payments
- One of the first solutions on the Russian market



######  Sovest (Loyalty / Credit Card)

- Built the first version of the Sovest app
- Product later spun off into a dedicated team and codebase



######  Qiwi Investor

- Developed the initial cross-platform version of Qiwi Investor
- Used J2ObjC for shared logic across Android and iOS



######  Device Farm Integration

- Integrated Device Farm on Kubernetes into Qiwi’s CI/CD
- Presented the setup at Qiwi Android Developer Days



######  Support Chat SDKs

- Delivered multiple SDKs:
  - Core SDK (no UI)
  - Full-featured UI SDK
  - Cross-platform Kotlin Multiplatform SDKs for Android & iOS



######  CBDC (Central Bank Digital Currency)

- Contributed to the first version of Russia’s Digital Ruble (CBDC) within Qiwi Wallet
- Used Kotlin Multiplatform for shared codebase



######  Before Qiwi

- C++ Developer at GosNIIAS (State Aviation Institute)
- JavaScript Developer at Masterdata (Salesforce integrator)



######  Education

Moscow Aviation Institute  
Master's degree in Information Technology (2005 → 2011)

<div style="page-break-after: always;"></div>
#####  My Engineering Approach

######  Able to adapt to the pace

- Comfortable working under tight deadlines, even on high-load apps with millions of users.  
- Equally confident in taking a slower, more thoughtful approach when code quality and long-term stability matter
- Experienced with A/B testing, [trunk-based development](https://trunkbaseddevelopment.com/), and release monitoring
- Know how to quickly roll back or switch off features after release if needed



######  Choosing tools with purpose

- I bring in advanced tools like RxJava, Kotlin Multiplatform, or Dagger when the project benefits from them
- But I also know when a simple WebView with some tweaks is enough to test and launch fast
- I aim to use the right tool for the job, not the most complex one



######  Understand complexity — and when to avoid it

- I’ve worked with Kubernetes-based device farms, CI/CD pipelines, and production-grade monitoring tools
- At the same time, I appreciate when a small script and one intern can solve the problem more effectively

#####  Security & DevOps Experience


######  Application Security

Leading a large fintech product means thinking about security every day
I’ve worked closely with our AppSec team throughout the development process

- Created a custom Capture The Flag challenge for [Qiwi Android Developer Days](https://www.youtube.com/watch?v=NvSvRdzu6H4)
- Hands-on experience with Frida (Android) and Ghidra (iOS) for reverse engineering and app security



######  DevOps & Infrastructure

In recent years, I’ve also worked on the DevOps side of mobile:

- Set up and delivered a Device Farm on Kubernetes for automated testing
- Managed CI/CD using Tekton Pipelines, Argo CD, and Ansible
- Worked with observability tools like Grafana and Kibana

