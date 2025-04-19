import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// =============================================
// EVENT DATA
// =============================================
// To add a new event:
// 1. Create a new property in this object with a unique slug as the key
// 2. The slug should match the URL you want to use (e.g., "leadership-workshop-2025")
// 3. Fill in all the required fields for the event
// 4. Make sure to update the pastEvents array in /app/events/page.tsx to link to this event
// =============================================
const events = {

  "JCI-Action-Framework": {
    title: "JCI Action Framework",
    date: "31 Mar 2025",
    location: "Ponda Beach, Goa",
    organizer: "Environmental Committee",
    mainImage: "/event_photos/32.jpg?height=500&width=1200", // Replace with actual image path
    // Add 2-3 additional images for the gallery
    images: [
      "/placeholder.svg?height=300&width=400", // Replace with actual image paths
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    // HTML content for the description - you can use paragraphs, lists, etc.
    description: `
      <p>The JCI Ponda Community Clean-up Drive was a tremendous success, bringing together over 100 volunteers from all walks of life to clean up Ponda Beach and surrounding areas.</p>
      
      <p>The event began at 7:00 AM with a brief orientation session where volunteers were divided into teams and assigned specific areas. Each team was equipped with gloves, trash bags, and other necessary cleaning tools. The clean-up activity lasted for approximately 4 hours, during which the volunteers collected over 200 kg of waste, including plastic bottles, food wrappers, and other non-biodegradable items.</p>
      
      <p>Following the clean-up, an awareness session was conducted to educate participants and local residents about the importance of proper waste disposal and the harmful effects of pollution on marine life and the environment. The session also included practical tips on reducing plastic usage and adopting sustainable practices in daily life.</p>
      
      <p>The event concluded with a small ceremony to recognize the efforts of all volunteers and to thank the local authorities and sponsors for their support. Refreshments were provided to all participants.</p>
      
      <p>This initiative not only helped in cleaning up a significant portion of Ponda Beach but also raised awareness about environmental conservation among the local community. JCI Ponda plans to make this a regular event and expand it to other areas in the region.</p>
    `,
    // List of key achievements or impacts from the event
    impact: [
      "Collected over 200 kg of waste from Ponda Beach",
      "Engaged 100+ volunteers from the community",
      "Raised awareness about environmental conservation",
      "Established partnerships with local environmental organizations",
    ],
  },

  // Event 2: Effective Public Speaking
  "Effective-Public-Speaking": {
    title: "Effective Public Speaking",
    date: "29 Mar 2025",
    location: "JCI Ponda Hall, Ponda",
    organizer: "Training Committee",
    mainImage: "/event_photos/31.jpg",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Leadership Workshop organized by JCI Ponda was a transformative experience for all participants, focusing on developing essential leadership skills among young professionals and students.</p>
      
      <p>The workshop was conducted by renowned leadership trainer Mr. Rajesh Sharma, who has over 15 years of experience in leadership development. The day-long workshop covered various aspects of leadership, including communication skills, team management, conflict resolution, and strategic thinking.</p>
      
      <p>The morning session began with interactive activities designed to break the ice and encourage participants to step out of their comfort zones. This was followed by a comprehensive session on effective communication, where participants learned about the importance of clear communication in leadership and practiced various communication techniques.</p>
      
      <p>After lunch, the workshop focused on team management and conflict resolution. Through role-playing exercises and case studies, participants gained insights into managing diverse teams and resolving conflicts in a constructive manner. The final session of the day was dedicated to strategic thinking, where participants worked in groups to develop strategic plans for hypothetical scenarios.</p>
      
      <p>The workshop concluded with a Q&A session, allowing participants to seek clarification and advice on specific leadership challenges they face. Each participant received a certificate of participation and a leadership resource kit to continue their leadership development journey.</p>
      
      <p>The feedback from participants was overwhelmingly positive, with many expressing that the workshop provided them with practical tools and insights that they could immediately apply in their professional and personal lives.</p>
    `,
    impact: [
      "Trained 50 young professionals and students in leadership skills",
      "Provided practical tools for effective communication and team management",
      "Created networking opportunities among participants",
      "Received 95% positive feedback from attendees",
    ],
  },

  // Event 3: JCOM Meet 1.0
  "JCOM-Meet-1.0": {
    title: "JCOM Meet 1.0",
    date: "29 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/30.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "Sport's-Day": {
    title: "Sport's Day",
    date: "16 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/29.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "Educational-Outreach-Program": {
    title: "Educational Outreach Program",
    date: "15 Mar b2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/28.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "Gulal-Holi-Party": {
    title: "Gulal Holi Party",
    date: "14 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/27.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "Annual-Running-Race": {
    title: "JCOM Meet 1.0",
    date: "12 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/26.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "53rd-Charter-Night": {
    title: "JCOM Meet 1.0",
    date: "10 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/25.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "Women's-Day-Rally": {
    title: "Aboli Week: Women's Day Rally",
    date: "08 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/24.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "Women-of-Worth": {
    title: "Aboli Week: Women of Worth",
    date: "08 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/23.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "DAY-6": {
    title: "Aboli Week: DAY 6",
    date: "07 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/22.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "DAY-5": {
    title: "Aboli week: Day 5",
    date: "06 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/21.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },

  "DAY-4": {
    title: "Aboli week: Day 4",
    date: "05 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/20.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "DAY-3": {
    title: "Aboli week: Day 3",
    date: "04 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/19.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "DAY-2": {
    title: "Aboli week: Day 2",
    date: "03 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/18.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "DAY-1": {
    title: "Aboli week: Breast Cancer Screening Camp",
    date: "02 Mar 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/17.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Salute-the-Silent-Worker": {
    title: "Salute the Silent Worker",
    date: "23 Feb 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/16.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Daan-at-Maa-Ashroghar": {
    title: "Daan at Maa Ashroghar",
    date: "23 Feb 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/15.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "ldmt": {
    title: "Lo Development Management Training",
    date: "21 Feb 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/14.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Water-Distribution": {
    title: "Water Distribution-Shivjayanthi",
    date: "19 Feb 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/13.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Valentine's-Day-Contest": {
    title: "Valentine's Day Contest-Ishq Wala Frame",
    date: "14 Feb 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/12.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "cultural-exchange-program": {
    title: "Cultural Exchange Program",
    date: "08 Feb 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/11.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Rising-for-a-Cause": {
    title: "Rising for a Cause",
    date: "04 Feb 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/10.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "53rd-installation": {
    title: "JCI'sPonda 53rd installation",
    date: "26 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/9.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Republic-Day Celebration": {
    title: "Republic Day Celebration",
    date: "26 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/8.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "PSEW": {
    title: "JPublic Speaking & Entreprenurship Workshop",
    date: "20 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/7.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Swagat": {
    title: "Jwagat a Transformational Orientation Program",
    date: "19 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/6.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "National-Youth-Day": {
    title: "National Youth Day: Felicitating Youth Icon",
    date: "19 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/5.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Chapcon-2025": {
    title: "Chapcon 2025",
    date: "19 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/4.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Training-on-Startups": {
    title: "National Youth Day: Training on Startups",
    date: "18 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/3.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "SD&C": {
    title: "National Youth Day: Skill Development & Curiosity",
    date: "17 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/2.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },
  "Presidential-Academy": {
    title: "Presidential Academy",
    date: "11 Jan 2025",
    location: "Community Center, Ponda",
    organizer: "Health Committee",
    mainImage: "/event_photos/1.jpg?height=500&width=1200",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    description: `
      <p>The Health Awareness Camp organized by JCI Ponda provided free health check-ups and awareness sessions on preventive healthcare for the local community members, with a special focus on underprivileged sections of society.</p>
      
      <p>The camp was set up at the Community Center in Ponda and was operational from 9:00 AM to 5:00 PM. A team of 15 healthcare professionals, including doctors, nurses, and paramedical staff, volunteered their services for the camp. The camp offered various health services, including general health check-ups, blood pressure monitoring, blood sugar testing, eye check-ups, and dental check-ups.</p>
      
      <p>In addition to the check-ups, several awareness sessions were conducted throughout the day on topics such as nutrition, hygiene, maternal health, and prevention of common diseases. These sessions were designed to be interactive, allowing participants to ask questions and seek clarification on health-related concerns.</p>
      
      <p>A special desk was set up to provide information about government health schemes and how to access them. Volunteers assisted community members in understanding the eligibility criteria and application process for these schemes.</p>
      
      <p>The camp also included a free medicine distribution counter, where prescribed medicines were provided to those in need. Additionally, nutritious food packets were distributed to all participants.</p>
      
      <p>The Health Awareness Camp was a significant success, serving over 300 community members and providing them with essential healthcare services and information. The initiative highlighted JCI Ponda's commitment to community welfare and public health.</p>
    `,
    impact: [
      "Provided free health check-ups to over 300 community members",
      "Conducted awareness sessions on preventive healthcare",
      "Distributed free medicines to those in need",
      "Connected community members with government health schemes",
    ],
  },


}



export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const event = events[slug as keyof typeof events]

  // Handle case when event is not found
  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/events">Back to Events</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Event Header */}
      <div className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden flex flex-col items-center justify-start text-center text-white h-96 md:h-72">
  {/* Decorative Bubbles */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
  <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>
  
  <div className="container mx-auto px-4 pt-8 w-full">
    <div className="w-full text-left">
      <Link
        href="/events"
        className="inline-flex hover:text-blue-200 mb-4 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Link>
    </div>
    
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">{event.title}</h1>
    
    <div className="flex flex-row flex-wrap gap-2 text-sm">
      <div className="bg-blue-800/50 px-3 py-1 rounded-full">
        <span className="font-medium">Date:</span> {event.date}
      </div>
      <div className="bg-blue-800/50 px-3 py-1 rounded-full">
        <span className="font-medium">Location:</span> {event.location}
      </div>
      <div className="bg-blue-800/50 px-3 py-1 rounded-full">
        <span className="font-medium">Organized by:</span> {event.organizer}
      </div>
    </div>
  </div>
</div>


      <div className="container mx-auto px-4 py-8">
        {/* Main Image */}
        <div className="mb-8 imagewidth">
          <img
            src={event.mainImage || "/placeholder.svg"}
            alt={`${event.title} - Main Image`}
            className=" w-[550px] h-[670px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Image Gallery */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {event.images.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`${event.title} - Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          ))}
        </div> */}

        {/* Event Description */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Event Details</h2>
          <div
            className="prose prose-blue max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        </div>

        {/* Impact Section */}
        {/* <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Impact</h2>
          <ul className="space-y-2">
            {event.impact.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 text-sm mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/reports">Back to Events</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

