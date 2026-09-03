// Superseded by ShowcaseLayout's "Jump to screen" picker, which lives outside
// the phone frame and doesn't collide with each screen's own bottom nav.
// Kept as a no-op so the 20 screen components (which each render <ScreenNav />)
// don't need individual edits.
export default function ScreenNav() {
  return null
}
