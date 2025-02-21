# 📘 Segment Demo Site

This is a **demonstration site** meant to help become familiar with **Segment's tracking capabilities**, including **page tracking, identity tracking, and event tracking**.

## 🚀 Features
- **User Identity Switching** → Switch between different user profiles and track identity resolution.
- **Page Tracking** → Automatically tracks page views across the site.
- **Support Ticket Form** → Tracks support submissions with event tracking.
- **Pricing Page** → Tracks plan selections and routes users to a sales contact form.
- **Documentation Section** → Provides example links and structured content.

## 📂 Folder Structure

```
/src
 ├── components          # Reusable UI components
 ├── containers          # Page-level components
 │   ├── Docs           # Documentation section
 │   ├── Main           # Main splash page
 │   ├── Pricing        # Pricing page with tracking
 │   ├── Support        # Support ticket submission
 │   ├── ContactForm    # Sales contact form
 ├── state-management    # Global state management (React Context)
 ├── utilities          # Helper functions & mock data
 ├── App.jsx            # Main app component with routing
 ├── index.jsx          # Entry point
 ├── README.md          # Project documentation
```

## Installation & Setup

### 1. Clone the Repository

```
git clone git@github.com:bobbyatsegment/segment_testing_site.git
cd segment_testing_site
```

### 2. Install Dependencies
```
npm install
```

### 3. Install the Segment Snippet

- [Create a web source in your Segment workspace](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/quickstart/#step-1-create-a-source-in-the-segment-app) - when you create (or change) a source in the Segment app, Segment generates a new write key for that source. You use the write key in your website code to tell Segment servers where the data is coming from.
- Grab the latest version of the Segment snippet in the Overview tab of the source you just created.
- Paste the snippet into the `<head>` tag within `index.html`
```
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Segment Demo Site</title>
    
    <!-- Insert Segment Snippet here -->


    <!-- End Segment Snippet -->

</head>
```

## 4. Run the Development Server
```
npm run dev
```

Now, the site should be accessible at `http://localhost:5173`.


## User Identity Switching

### How it Works:
- The `UserSwitcher` component allows users to switch between identities.
- **It resets previous analytics data** and triggers a new `identify` call.
- The `Tracking Debugger` can display payloads as invoked by the client or as JSON.

#### Example Analytics Identify Call
```
analytics.identify("user_123", {
  name: "John Doe",
  email: "john@example.com",
  plan: "Pro"
});
```


## Page Tracking

### How it Works:
- The `PaegTracking` component **automatically tracks route changes**.
- Uses `analytics.page()` to log each page view.

#### Example Analytics Page Call
```
analytics.page("/pricing", {
  title: "Pricing Page",
  path: "/pricing",
});
```

## Pricing Page

### How it Works:
- Users can select a plan, triggering a `Plan Selected` event.
- Redirects users to a sales contact form.

#### Event invoked for Plan Selection
```
analytics.track("Plan Selected", {
  plan_name: "Pro",
  price: 19.99,
  selected_by: "user_123",
  timestamp: new Date().toISOString(),
});
```

## Sales Contact Form

### How it Works:
- When users submit their email, a `Sales Contact Requested` event is fired.
- Displays a thank-you message and allows users to return to the homepage.

#### Event invoked for Contact Request
```
analytics.track("Sales Contact Requested", {
  email: "john@example.com",
  plan: "Pro",
  timestamp: new Date().toISOString(),
});
```

## Support Ticket Submission

### How it Works:
- Users can submit a support ticket via the form.
- Triggers a `Support Ticket Submitted` event.

#### Event invoked for Support Ticket
```
analytics.track("Support Ticket Submitted", {
  ticketId: "TICK12345",
  subject: "Billing Issue",
  priority: "High",
  submittedAt: new Date().toISOString(),
});
```


## Documentation Section

### How it Works:
- Provides structured navigation to different docs pages.
- Each documentation page is tracked when visited.

#### Event invoked for Support Ticket
```
analytics.page("/docs/phone", {
  title: "Phone Setup Docs",
  path: "/docs/phone",
});
```

## Configuration

If you need to customize Segment settings, update the tracking initialization inside `index.html`:

```
analytics.load('YOUR_SEGMENT_WRITE_KEY');
analytics.page();
```
