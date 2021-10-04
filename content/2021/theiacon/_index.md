---
logo: '2021/theiacon/images/logos/theiacon-logo.svg'
title: 'TheiaCon 2021'
seo_title: 'TheiaCon 2021'
headline: |
  <div class='headerCtn'><h1>Jump Aboard the <br> Theia Rocketship</h1> <h2>Leading the Next Generation <br> of Cloud IDE Development</h2></div>
tagline: 'Virtual Conference | November 17, 2021'
summary: 'TheiaCon is a virtual conference focused around the Eclipse Theia IDE ecosystem. It brings together a diverse group of Theia developers, adopters, and other contributors. The program will feature a mix of full-length talks, expert panel discussions and short ”lightning talks” focused on project insider, adopter, and broader ecosystem stories. This event is hosted by the Eclipse Foundation’s Cloud DevTools Working Group and is open to anyone interested in learning more about Cloud IDE development and the Theia project.'
date: 2021-11-17
header_wrapper_class: 'header-theiacon-2021-event'
links:
  [
    [href: 'https://www.crowdcast.io/e/theiacon2021', text: 'REGISTER'],
    [href: 'https://forms.gle/M3ckHPmjFpop6FzdA', text: 'Call for Papers'],
    [href: '#committee', text: 'Program Committee'],
    [href: '#speakers', text: 'Speakers and Agenda'],
  ]
hide_page_title: true
hide_sidebar: true
hide_breadcrumb: true
container: 'container-fluid'
layout: 'single'
---

{{< grid/div isMarkdown="false" class="row white-row" >}}
{{< grid/div isMarkdown="false" class="container theiacon-ctn" >}}
{{< events/registration event="theiacon" year="2021">}}
The TheiaCon 2021 Call for Presentations (CFP) is now open. We will be offering a broad range of opportunities to present and share all things Theia. The program will include 45 minute presentations (including demos), expert panel discussions and 5 minute “lightning talks.”  Potential topics include: Adopter Profiles, How To Build and Deploy Products and/or Services with Theia, How To Extend Theia, How You Have Used Theia or feel free to propose any interesting topic you are passionate about as a Theia Developper. 
{{</ events/registration >}}
{{</ grid/div >}}
{{</ grid/div >}}

<!-- Add user carousel for committee -->
{{< grid/section-container>}}
  {{< grid/div class="padding-top-40" id="committee" isMarkdown="false">}}
    {{< events/user_display event="theiacon" year="2021"  source="committee" imageRoot="/2021/theiacon/images/committee/" subpage="program-committee" >}}
    {{</ events/user_display >}}
  {{</ grid/div >}}
{{</ grid/section-container >}}

<!-- Add user carousel for speakers -->
{{< grid/section-container id="speakers" class="featured-section-row text-center featured-section-row-dark-bg eclipsefdn-user-display-circle" >}}
  {{< events/user_display event="theiacon" year="2021" title="Speakers" source="speakers" imageRoot="/2021/theiacon/images/committee/" displayLearnMore="false" />}}
{{</ grid/section-container >}}

<!-- Add sponsors section -->
{{< theiacon/sponsored-by event="theiacon" year="2021" source="members">}}