import type { FeaturePageData } from "@/components/features/FeaturePageLayout";

export const featurePages: Record<string, FeaturePageData> = {
  "team-inbox": {
    badge: "Shared Team Inbox",
    headline: "Collaborate Seamlessly Across Every Channel",
    subtitle:
      "Unify customer support, sales, and marketing in one inbox. Manage conversations across WhatsApp, Facebook Messenger, Instagram, Email, and more — without switching devices or losing context.",
    sections: [
      {
        title: "Easy Collaboration",
        description:
          "Share a single inbox across teammates. Assign chats, stay organized, and resolve issues faster. From one WhatsApp number to multiple platforms, ChatDaddy's Team Inbox makes teamwork effortless.",
        bullets: [
          "Shared inbox across your entire team",
          "Assign and transfer chats with full context",
          "Internal notes and mentions for coordination",
          "Chat history and audit trail for accountability",
        ],
      },
      {
        title: "Multichannel Support",
        description:
          "Manage all your customer conversations — whether on WhatsApp, Facebook Messenger, Email, or SMS — in one place. No more switching between apps.",
        bullets: [
          "WhatsApp Business API & personal number support",
          "Instagram DM, Facebook Messenger integration",
          "Email and SMS in the same inbox",
          "Unified customer profile across channels",
        ],
      },
      {
        title: "Ticketing & Smart Assignment",
        description:
          "Distribute chats automatically with filters and rules. Track tickets by assignee, status, or priority — so nothing slips through the cracks.",
        bullets: [
          "Round-robin, load-balanced, or skill-based assignment",
          "Auto-routing by keyword, language, or customer segment",
          "Priority-based ticket tracking",
          "Set business hours and auto-assign offline messages",
        ],
      },
      {
        title: "Connect With Your Apps",
        description:
          "Integrate with your favorite tools to maximize efficiency and scale your workflow. Connect with Shopify, HubSpot, Google Sheets, and more.",
        bullets: [
          "Native integrations with popular business tools",
          "Zapier and Make (Integromat) connectors",
          "API webhooks for custom integrations",
          "E-commerce platform sync",
        ],
      },
    ],
    stats: [
      { value: "50%", label: "Faster Response Times" },
      { value: "3x", label: "More Conversations Handled" },
      { value: "98%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Always Available" },
    ],
    faqs: [
      {
        question: "How many team members can use the shared inbox?",
        answer:
          "ChatDaddy supports unlimited team members on Business and Enterprise plans. Each team member gets their own login with customizable permissions and role-based access control.",
      },
      {
        question: "Can I connect multiple WhatsApp numbers?",
        answer:
          "Yes, you can connect multiple WhatsApp Business API numbers and even personal WhatsApp numbers to the same inbox. All conversations are unified in one dashboard.",
      },
      {
        question: "Does it work with WhatsApp Business API?",
        answer:
          "Yes, ChatDaddy is an official WhatsApp Business Solution Provider. We support both the WhatsApp Business API and WhatsApp Web connections for maximum flexibility.",
      },
    ],
  },

  notification: {
    badge: "Smart Notification",
    headline: "Keep Customers Engaged With Automated Updates",
    subtitle:
      "Automate order updates, reminders, and promotions across WhatsApp, Messenger, Email, SMS, and more. Keep customers engaged throughout their shopping journey with notifications that actually get read.",
    sections: [
      {
        title: "Re-engage Existing Customers",
        description:
          "Send order confirmations, delivery updates, and personalized offers. Build long-term loyalty with consistent communication that keeps your brand top of mind.",
        bullets: [
          "Automated order confirmation messages",
          "Real-time delivery tracking notifications",
          "Personalized promotional offers",
          "Win-back campaigns for inactive customers",
        ],
      },
      {
        title: "98% Open Rate",
        description:
          "Unlike email's 25% open rate, messaging channels like WhatsApp and SMS reach up to 98% — ensuring your updates don't get ignored and your message gets through.",
        bullets: [
          "WhatsApp messages have 98% open rate vs email's 20%",
          "5x more people see your message than email",
          "Higher engagement leads to more conversions",
          "Real-time delivery confirmation",
        ],
      },
      {
        title: "Recover Lost Revenue",
        description:
          "Reduce cart abandonment with automated payment reminders. Share secure links so customers can complete their purchase instantly without friction.",
        bullets: [
          "Automated abandoned cart recovery messages",
          "Secure payment reminder links",
          "One-click checkout completion",
          "Follow-up sequences for unpaid orders",
        ],
      },
      {
        title: "Flexible Channel Options",
        description:
          "Choose the best channel for the moment — WhatsApp, Messenger, Email, or SMS — and deliver the right message at the right time to maximize engagement.",
        bullets: [
          "Multi-channel delivery (WhatsApp, SMS, Email, Messenger)",
          "Smart channel selection based on customer preference",
          "Fallback channels if primary is unavailable",
          "Unified analytics across all channels",
        ],
      },
    ],
    stats: [
      { value: "98%", label: "Open Rate on WhatsApp" },
      { value: "5x", label: "Higher Than Email" },
      { value: "40%", label: "Revenue Recovered" },
      { value: "24/7", label: "Automated Delivery" },
    ],
    faqs: [
      {
        question: "Can I customize which notifications I receive?",
        answer:
          "Yes, ChatDaddy allows granular notification control. You can filter by channel, customer segment, keyword triggers, and time of day. Each team member can customize their own notification preferences.",
      },
      {
        question: "Does it work on mobile devices?",
        answer:
          "Yes, ChatDaddy sends push notifications to both iOS and Android devices through our mobile app. You can also receive notifications via email or SMS for critical alerts.",
      },
    ],
  },

  chatbot: {
    badge: "Automated Chatbot",
    headline: "Automate Conversations With 24/7 Chatbots",
    subtitle:
      "Automate conversations across WhatsApp, Facebook Messenger, Email, SMS, and more. Set up a chatbot that responds instantly — your 24/7 customer service agent.",
    sections: [
      {
        title: "Auto Tagging for CRM",
        description:
          "Classify and route customers automatically. Add tags, assign to teammates, and keep your CRM organized without manual work. Save hours of manual data entry every day.",
        bullets: [
          "Automatic customer classification by intent",
          "Smart tagging based on conversation content",
          "Auto-assign to the right team member",
          "CRM enrichment without manual effort",
        ],
      },
      {
        title: "Keyword-Based Replies",
        description:
          "Automate answers to frequently asked questions. Free up your team while the bot handles repetitive queries in seconds, letting agents focus on complex issues.",
        bullets: [
          "Keyword-triggered instant replies",
          "Multi-language keyword detection",
          "Customizable reply templates",
          "Continuous learning from conversations",
        ],
      },
      {
        title: "24/7 Auto Reply",
        description:
          "Stay responsive even when your team is offline. Bots can start conversations, collect details, and qualify leads around the clock — never miss an opportunity.",
        bullets: [
          "After-hours auto-responder",
          "Lead qualification while you sleep",
          "Appointment booking automation",
          "Smart handoff to human agents when needed",
        ],
      },
      {
        title: "Buttons & Quick Replies",
        description:
          "Add buttons, lists, and options to your chatbot messages. Customers can respond instantly — making conversations faster and more engaging than free-text.",
        bullets: [
          "Interactive button messages",
          "Quick reply options for common responses",
          "List messages for product browsing",
          "Call-to-action buttons for conversions",
        ],
      },
    ],
    stats: [
      { value: "70%", label: "Queries Auto-Resolved" },
      { value: "24/7", label: "Always Online" },
      { value: "3sec", label: "Average Response Time" },
      { value: "5x", label: "More Leads Captured" },
    ],
    faqs: [
      {
        question: "Do I need coding skills to build a chatbot?",
        answer:
          "No coding is required. ChatDaddy's visual chatbot builder uses a drag-and-drop interface where you can create complex conversation flows, set conditions, and add AI responses without writing a single line of code.",
      },
      {
        question: "Can the chatbot hand off to a human agent?",
        answer:
          "Yes, ChatDaddy chatbots support seamless human handoff. When a conversation requires human attention, the chatbot can automatically transfer the chat to an available agent with full conversation context.",
      },
      {
        question: "What languages does the chatbot support?",
        answer:
          "ChatDaddy chatbots support multiple languages including English, Malay, Chinese, Thai, Indonesian, and more. The AI can detect the customer's language and respond accordingly.",
      },
    ],
  },

  marketing: {
    badge: "Intelligent Marketing",
    headline: "Scale Your Campaigns With Personalized Broadcasts",
    subtitle:
      "Reach thousands of customers with personalized promotions and automated campaigns across WhatsApp, Messenger, Email, SMS, and more. Strengthen relationships, increase repeat purchases, and grow sales — all with one click.",
    sections: [
      {
        title: "Increase Repeat Purchases",
        description:
          "Target customers based on purchase history to encourage repeat orders. Keep loyal buyers engaged and coming back for more with personalized recommendations.",
        bullets: [
          "Purchase history-based targeting",
          "Personalized product recommendations",
          "Loyalty campaign automation",
          "Re-engagement for inactive buyers",
        ],
      },
      {
        title: "Real-Time Insights",
        description:
          "Access campaign analytics instantly. Measure open rates, track engagement, and optimize your promotional strategies on the go with actionable data.",
        bullets: [
          "Real-time delivery and read tracking",
          "Click-through rate analytics",
          "Conversion tracking with UTM parameters",
          "Campaign comparison reports",
        ],
      },
      {
        title: "Personalized Broadcasts",
        description:
          "Send thousands of tailored messages in a single click. Import contacts, customize content, and deliver unique customer experiences at scale.",
        bullets: [
          "Send to thousands of contacts simultaneously",
          "Dynamic personalization variables",
          "Rich media: images, videos, documents",
          "Template message management",
        ],
      },
      {
        title: "Automated Sales Funnels",
        description:
          "Streamline your marketing with intelligent routing rules. Manage conversations at scale while protecting customer data and ensuring quality engagement.",
        bullets: [
          "Behavior-triggered follow-up sequences",
          "Lead nurturing drip campaigns",
          "A/B testing for message optimization",
          "Win-back campaigns for inactive contacts",
        ],
      },
    ],
    stats: [
      { value: "98%", label: "Open Rate on WhatsApp" },
      { value: "45%", label: "Higher CTR vs Email" },
      { value: "10x", label: "ROI on Campaigns" },
      { value: "1M+", label: "Messages Sent Daily" },
    ],
    faqs: [
      {
        question: "How many contacts can I broadcast to?",
        answer:
          "ChatDaddy supports broadcasting to unlimited contacts, depending on your plan. WhatsApp Business API allows high-volume messaging with official template approvals for maximum deliverability.",
      },
      {
        question: "Will my number get banned for broadcasting?",
        answer:
          "ChatDaddy uses the official WhatsApp Business API, which is designed for business messaging at scale. When you follow WhatsApp's guidelines (opt-in contacts, quality content), your number remains safe.",
      },
      {
        question: "Can I personalize broadcast messages?",
        answer:
          "Yes, ChatDaddy supports dynamic variables in broadcast messages. Personalize with customer name, order details, purchase history, and custom fields for a tailored experience.",
      },
    ],
  },

  shop: {
    badge: "WhatsApp Shop",
    headline: "Boost Sales with a Customized Shopping Experience",
    subtitle:
      "Create a storefront inside WhatsApp where customers can browse products, place orders, and pay securely — all without leaving the chat.",
    sections: [
      {
        title: "Sell Directly in Chat",
        description:
          "List your products for free and let customers shop without switching apps. Create a complete storefront inside WhatsApp with product images, descriptions, and pricing.",
        bullets: [
          "Free product listings in WhatsApp",
          "Product catalog with images and descriptions",
          "Category organization and search",
          "Multi-currency support",
        ],
      },
      {
        title: "One-Click Sync",
        description:
          "Already selling online? Import your products from other platforms and extend your reach into WhatsApp. Sync inventory automatically from Shopify, WooCommerce, and more.",
        bullets: [
          "Import from Shopify, WooCommerce, Lazada, Shopee",
          "Real-time inventory sync across platforms",
          "Automatic price and stock updates",
          "Bulk product import via CSV",
        ],
      },
      {
        title: "Get Paid & Manage Orders",
        description:
          "Accept secure payments, track sales, and fulfill orders — all from one dashboard. Streamlined order management from checkout to delivery.",
        bullets: [
          "Multiple payment gateway integration",
          "Automated order confirmations",
          "Order status tracking notifications",
          "Return and refund management",
        ],
      },
      {
        title: "Seamless Integrations",
        description:
          "Connect with your favorite apps to keep inventory, payments, and workflows in sync. Build a complete e-commerce stack around WhatsApp.",
        bullets: [
          "E-commerce platform integration",
          "Payment gateway connectors",
          "Shipping and logistics sync",
          "Accounting software integration",
        ],
      },
    ],
    stats: [
      { value: "3x", label: "Higher Conversion Rate" },
      { value: "60%", label: "Reduction in Cart Abandonment" },
      { value: "25%", label: "Increase in Average Order Value" },
      { value: "5min", label: "Average Time to Purchase" },
    ],
    faqs: [
      {
        question: "Can customers complete purchases inside WhatsApp?",
        answer:
          "Yes, ChatDaddy enables a complete end-to-end shopping experience within WhatsApp. Customers can browse products, add to cart, and complete payment without leaving the chat.",
      },
      {
        question: "Which e-commerce platforms does it integrate with?",
        answer:
          "ChatDaddy integrates with Shopify, WooCommerce, Lazada, Shopee, and other major e-commerce platforms. Sync your product catalog and inventory automatically.",
      },
    ],
  },

  pay: {
    badge: "Pay",
    headline: "Get Paid Instantly Without Leaving the Chat",
    subtitle:
      "Accept payments directly in WhatsApp. Create payment links, connect with 200+ gateways, and manage transactions in one dashboard.",
    sections: [
      {
        title: "Get Paid in Chat",
        description:
          "Let customers pay instantly in WhatsApp without switching apps or using manual steps. Seamless checkout that converts browsers into buyers.",
        bullets: [
          "In-chat payment experience",
          "Automatic payment confirmation messages",
          "Recurring payment setup",
          "Multi-currency support",
        ],
      },
      {
        title: "Connect With 200+ Gateways",
        description:
          "Accept global payments with hundreds of options — giving your customers flexibility wherever they are. From credit cards to local payment methods.",
        bullets: [
          "Stripe, PayPal, and Razorpay integration",
          "Local gateways: FPX, GrabPay, Touch 'n Go, etc.",
          "Bank transfer verification",
          "Cryptocurrency payment support",
        ],
      },
      {
        title: "One-Click Payment Links",
        description:
          "Send a payment request straight from the inbox. Customers complete checkout in seconds with a single click — no forms, no friction.",
        bullets: [
          "One-click payment link generation",
          "Custom amounts and descriptions",
          "Expiring links for time-sensitive payments",
          "Automatic follow-up for unpaid links",
        ],
      },
      {
        title: "Track & Manage Transactions",
        description:
          "View your full payment history and get real-time updates from the ChatDaddy dashboard. Complete visibility into your revenue stream.",
        bullets: [
          "Real-time transaction dashboard",
          "Payment status tracking and receipts",
          "Revenue analytics and reporting",
          "Export for accounting and reconciliation",
        ],
      },
    ],
    stats: [
      { value: "85%", label: "Payment Completion Rate" },
      { value: "<30s", label: "Average Payment Time" },
      { value: "40%", label: "Faster Collections" },
      { value: "0%", label: "Processing Fee (on Basic)" },
    ],
    faqs: [
      {
        question: "Which payment gateways are supported?",
        answer:
          "ChatDaddy supports Stripe, PayPal, Razorpay, and major local payment gateways including FPX (Malaysia), GrabPay, and bank transfers. We continuously add new payment providers.",
      },
      {
        question: "Is it secure to accept payments via WhatsApp?",
        answer:
          "Absolutely. ChatDaddy uses industry-standard encryption and PCI-compliant payment processing. Payment links are secure, and no card data is stored on our servers.",
      },
    ],
  },

  automation: {
    badge: "Automation",
    headline: "Automate Workflows With a Visual Flow Builder",
    subtitle:
      "Save hours every week by automating repetitive tasks. Build flows with drag-and-drop simplicity, connect your favorite apps, and access ready-made templates from the community.",
    sections: [
      {
        title: "Visual Flow Builder",
        description:
          "Design automation with a simple drag-and-drop builder. Map out your workflows without writing a single line of code — from simple auto-replies to complex multi-step flows.",
        bullets: [
          "Drag-and-drop workflow editor",
          "Visual flow canvas with real-time preview",
          "Conditional branching and logic",
          "Test flows before going live",
        ],
      },
      {
        title: "Flexible Triggers & Actions",
        description:
          "Automate everything from customer onboarding to reminders. Choose triggers, set conditions, and let flows run automatically in the background.",
        bullets: [
          "Message, time, and event-based triggers",
          "Customer segment-based conditions",
          "Multi-step action sequences",
          "Scheduled and recurring automations",
        ],
      },
      {
        title: "Seamless Integrations",
        description:
          "Connect ChatDaddy with your favorite apps and tools. Keep data flowing smoothly across your stack — from CRM to e-commerce to helpdesk.",
        bullets: [
          "Zapier and Make (Integromat) integration",
          "API webhooks for custom integrations",
          "Google Sheets, HubSpot, Salesforce connectors",
          "E-commerce platform sync",
        ],
      },
      {
        title: "Community Templates",
        description:
          "Browse a library of templates built by other businesses. Get inspired, customize, and launch in minutes — no need to start from scratch.",
        bullets: [
          "Pre-built templates for common use cases",
          "One-click template installation",
          "Customize templates to fit your needs",
          "Share your templates with the community",
        ],
      },
    ],
    stats: [
      { value: "80%", label: "Reduction in Manual Tasks" },
      { value: "5hrs", label: "Saved Per Agent Daily" },
      { value: "10x", label: "Faster Customer Response" },
      { value: "500+", label: "Automation Templates" },
    ],
    faqs: [
      {
        question: "What can I automate with ChatDaddy?",
        answer:
          "You can automate virtually any WhatsApp workflow — auto-replies, lead qualification, appointment booking, order updates, payment reminders, customer onboarding, feedback collection, and more. Our visual builder makes it easy to create custom automations.",
      },
      {
        question: "Does it integrate with my existing tools?",
        answer:
          "Yes, ChatDaddy integrates with 1,000+ apps through Zapier and Make. We also offer direct integrations with HubSpot, Salesforce, Shopify, Google Sheets, and more. Custom API webhooks are available for advanced integrations.",
      },
      {
        question: "Can I set up automation without coding?",
        answer:
          "Absolutely. ChatDaddy's visual workflow builder is completely no-code. Drag and drop triggers, conditions, and actions to create powerful automations in minutes.",
      },
    ],
  },

  crm: {
    badge: "CRM",
    headline: "Organize Customer Data Right Inside Your Inbox",
    subtitle:
      "Manage relationships directly from chat. Track leads, tag customers, and move deals across a visual Kanban board — so your entire team stays aligned.",
    sections: [
      {
        title: "Centralized Contact Profiles",
        description:
          "Keep all customer details — chat history, tags, and notes — in one place for full context at a glance. Never ask a customer to repeat themselves.",
        bullets: [
          "Complete conversation history across channels",
          "Custom fields and contact properties",
          "Tags and segments for organization",
          "Activity timeline and interaction log",
        ],
      },
      {
        title: "Kanban Board View",
        description:
          "Visualize your pipeline in stages. Drag and drop leads across columns to track progress and close deals faster with a visual, intuitive interface.",
        bullets: [
          "Customizable pipeline stages",
          "Drag-and-drop deal management",
          "Deal value tracking and forecasting",
          "Visual pipeline analytics",
        ],
      },
      {
        title: "Smart Tagging & Segmentation",
        description:
          "Categorize contacts by behavior, interest, or status. Easily target the right audience for follow-ups or campaigns with powerful segmentation tools.",
        bullets: [
          "Auto-tagging based on behavior",
          "Custom tag categories",
          "Dynamic segments with filters",
          "Segment-based automation triggers",
        ],
      },
      {
        title: "Team Collaboration",
        description:
          "Assign owners, leave notes, and share updates across teams so everyone stays aligned on customer progress. Full transparency without meetings.",
        bullets: [
          "Assign contact ownership",
          "Internal notes on contact profiles",
          "Role-based access control",
          "Activity feed for team transparency",
        ],
      },
    ],
    stats: [
      { value: "23,500+", label: "Businesses Using CRM" },
      { value: "360°", label: "Customer View" },
      { value: "35%", label: "Increase in Sales Conversion" },
      { value: "2x", label: "Customer Retention" },
    ],
    faqs: [
      {
        question: "How is ChatDaddy CRM different from traditional CRMs?",
        answer:
          "ChatDaddy CRM is purpose-built for messaging channels. Unlike traditional CRMs that treat messaging as an afterthought, ChatDaddy puts WhatsApp conversations at the center. Every contact profile, deal, and interaction is connected to real chat conversations.",
      },
      {
        question: "Can I import my existing contacts?",
        answer:
          "Yes, you can import contacts via CSV upload or sync from your existing CRM (HubSpot, Salesforce, etc.). ChatDaddy also automatically creates contact profiles from incoming WhatsApp conversations.",
      },
      {
        question: "Does it integrate with other CRM platforms?",
        answer:
          "Yes, ChatDaddy integrates with HubSpot, Salesforce, Pipedrive, and other CRM platforms. You can sync contacts, deals, and activities bidirectionally to keep both systems up to date.",
      },
    ],
  },
};

export const featureSlugs = Object.keys(featurePages);
