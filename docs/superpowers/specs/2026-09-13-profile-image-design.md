# Profile Image Design

## Goal

Replace the coded `JT` profile placeholder on Home with the supplied portrait at `src/assets/profile.jpg`.

## Implementation

- Import the local image through Vite from the Hero component.
- Render a semantic image with alt text `Portrait of Justine Bradley Tulio`.
- Keep the existing terminal-style frame and `profile.jpg` label.
- Remove the `JT`, brackets, placeholder instruction, grid background, and scan animation.
- Fill the portrait area with `object-fit: cover` and centered positioning. The source image closely matches the frame's portrait aspect ratio, so cropping will be minimal.
- Preserve the current responsive frame heights at desktop, tablet, and mobile sizes.

## Fallback and Accessibility

The image is bundled into the production build, avoiding an external network dependency. The existing frame background remains visible while the image loads. Descriptive alt text identifies the portrait for assistive technology.

## Verification

- Run ESLint and the Vite production build.
- Confirm the image is included in the build output.
- Inspect desktop and mobile framing for distortion, unwanted empty bars, or excessive cropping.
- Check page overflow and browser console errors.

## Out of Scope

- Editing, retouching, or compressing the supplied portrait
- Changing the surrounding Hero layout
