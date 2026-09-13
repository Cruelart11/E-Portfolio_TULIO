# Home Personalization Design

## Goal

Replace the Home page's placeholder identity and biography with Justine Bradley Tulio's supplied information, remove unwanted content, and keep the existing responsive terminal-themed presentation coherent.

## Identity Updates

- Replace `Juan Miguel Santos` with `Justine Bradley Tulio` in the Home hero, metadata, document titles, accessible labels, and shared footer.
- Change the header handle from `jm.santos` to `jb.tulio`.
- Change the profile placeholder initials from `JM` to `JT`.
- Keep the `profile.jpg` frame label, but remove the red, yellow, and green window-control dots.
- Remove the `status: available for internship` badge.

## Home Content

The hero description becomes:

> BS Information Technology student who enjoys both strategy and relaxation. Gaming, chess, food, rest, and esports events are important parts of my life and keep me focused, balanced, and connected to the gaming community.

The About section uses the user's supplied biography, divided into three readable paragraphs. Minor punctuation corrections are allowed, but its meaning and personal details remain unchanged.

The details panel contains only:

- Location: `Cainta, Rizal`
- Program: `BSIT`
- Year: `4th Year`

GPA is removed.

## Removed and Retained Sections

- Remove the entire Toolbox section from Home.
- Remove GitHub and LinkedIn from Contact.
- Keep Contact with the email `justinebradley.tulio@my.jru.edu`.
- Change the primary hero action to link directly to `#/prelim`.
- Change the secondary hero action to link directly to `#/course-expectation`.

Course Expectation and Prelim page content remain unchanged apart from shared identity elements such as the header, footer, and document-title suffix.

## Layout and Accessibility

Removing Toolbox and two contact cards must not leave blank space or broken anchors. The single email card expands cleanly within the Contact panel. The profile frame remains balanced without the window controls and status badge. Desktop and mobile layouts retain semantic heading order, visible focus styles, and no horizontal page overflow.

## Verification

- Search application source to ensure the old name, initials, handle, contact values, GPA, status badge, GitHub, LinkedIn, and Toolbox are absent from rendered content.
- Run ESLint and the Vite production build.
- Verify Home, Course Expectation, and Prelim navigation.
- Inspect Home at desktop and mobile widths.
- Check browser console errors and page-level horizontal overflow.

## Out of Scope

- Adding a real profile image
- Adding other social links or personal details
- Changing Course Expectation or Prelim coursework wording
- Deployment changes
