import React from 'react'
import PixelBlast from './component/PixelBlast'
import './App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      {/* Fixed background */}
      <div className="pixel-blast-fixed">
        <PixelBlast
          variant="square"
          pixelSize={12}  // Much larger pixels for cleaner look
          color="#B19EEF"
          patternScale={3}  // Increased scale for more spread out pattern
          patternDensity={0.6}  // Reduced density for fewer pixels
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.15}  // Reduced from 0.4 for slower, shorter spread
          rippleThickness={0.05}  // Reduced from 0.12 for tighter ripple ring
          rippleIntensityScale={2}  // Increased from 1.5 for more visible but shorter ripple
          liquid={false}  // Disabled - liquid effects are expensive
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.3}  // Reduced from 0.5 - slower animation = less GPU work
          edgeFade={0.25}
          transparent
          antialias={false}  // Disabled - antialiasing is expensive
          autoPauseOffscreen={true}  // Pause when not visible
        />
      </div>

      {/* Scrollable content */}
      <div className="content-wrapper">
        <header className="hero-section">
          <h1>Welcome to PixelBlast</h1>
          <p>Scroll down to see the infinite background effect</p>
        </header>

        <section className="content-section">
          <h2>Section 1: Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 2: Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Interactive Ripples</h3>
              <p>Click anywhere to create beautiful ripple effects that propagate across the canvas.</p>
            </div>
            <div className="feature-card">
              <h3>Animated Patterns</h3>
              <p>Dynamic noise-based patterns that evolve over time creating organic movement.</p>
            </div>
            <div className="feature-card">
              <h3>Multiple Variants</h3>
              <p>Choose from square, circle, triangle, or diamond pixel shapes.</p>
            </div>
            <div className="feature-card">
              <h3>Customizable</h3>
              <p>Adjust colors, pixel size, density, and many other parameters.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Section 3: Technical Details</h2>
          <p>
            The PixelBlast component uses WebGL shaders for high-performance rendering. 
            It implements Bayer dithering for the pixelated effect and fractional Brownian 
            motion (fBM) for organic noise patterns.
          </p>
          <p>
            The shader code runs entirely on the GPU, ensuring smooth performance even 
            with complex animations and interactions. The component supports both desktop 
            and mobile devices with responsive sizing.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 4: Use Cases</h2>
          <ul className="use-case-list">
            <li>Hero sections for modern websites</li>
            <li>Interactive landing pages</li>
            <li>Creative portfolio backgrounds</li>
            <li>Data visualization overlays</li>
            <li>Gaming interfaces</li>
            <li>Digital art installations</li>
            <li>Brand experiences</li>
            <li>Event websites</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Section 5: Performance</h2>
          <p>
            The component is optimized for performance with automatic pause when off-screen, 
            requestAnimationFrame for smooth animations, and efficient GPU utilization.
          </p>
          <p>
            Memory management is handled automatically, with proper cleanup of WebGL resources 
            when the component unmounts. The shader code is compiled once and reused for 
            maximum efficiency.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 6: Customization Options</h2>
          <p>
            The component offers extensive customization through props. You can adjust 
            visual parameters like pixel size, color, pattern scale, and density. Animation 
            parameters include speed, ripple effects, and liquid distortion.
          </p>
          <div className="param-grid">
            <div className="param-item">
              <strong>variant:</strong> Shape of pixels (square, circle, triangle, diamond)
            </div>
            <div className="param-item">
              <strong>pixelSize:</strong> Size of individual pixels (1-20)
            </div>
            <div className="param-item">
              <strong>color:</strong> Base color of the pattern (hex, rgb, hsl)
            </div>
            <div className="param-item">
              <strong>patternScale:</strong> Scale of the noise pattern (0.5-5)
            </div>
            <div className="param-item">
              <strong>patternDensity:</strong> Density of pixels (0-2)
            </div>
            <div className="param-item">
              <strong>enableRipples:</strong> Enable click ripple effects
            </div>
            <div className="param-item">
              <strong>liquid:</strong> Enable liquid distortion effect
            </div>
            <div className="param-item">
              <strong>speed:</strong> Animation speed multiplier (0-2)
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Section 7: Browser Compatibility</h2>
          <p>
            PixelBlast works in all modern browsers that support WebGL. This includes 
            Chrome, Firefox, Safari, Edge, and mobile browsers on iOS and Android.
          </p>
          <p>
            The component gracefully handles different pixel ratios and screen sizes, 
            automatically adjusting for retina displays and high-DPI screens.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 8: Integration</h2>
          <p>
            Integrating PixelBlast into your React application is straightforward. 
            Simply import the component and place it where you want the effect to appear.
          </p>
          <p>
            The component can be used as a full-page background (fixed position) or as 
            an inline element within your layout. It automatically handles resizing and 
            responds to container size changes.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 9: Advanced Features</h2>
          <p>
            Advanced users can leverage additional features like noise amount for film grain 
            effects, edge fade for smooth transitions, and pixel jitter for organic variation.
          </p>
          <p>
            The liquid effect creates beautiful organic distortions as you move your mouse 
            or touch the screen. Ripple effects can be customized with speed, thickness, 
            and intensity parameters.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 10: More Content</h2>
          <p>
            Keep scrolling to see how the background seamlessly extends to cover all content. 
            The fixed positioning ensures the effect is always visible behind your content.
          </p>
          <p>
            This approach creates a cohesive visual experience that works great for long-form 
            content, storytelling websites, or any application where you want a consistent 
            animated background throughout the user's journey.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 11: Design Inspiration</h2>
          <p>
            The dithering effect is inspired by retro computer graphics and early digital art. 
            It creates a nostalgic yet modern aesthetic that works well in contemporary design.
          </p>
          <p>
            The organic movement patterns are based on natural phenomena like flowing water, 
            smoke, and cloud formations, creating a mesmerizing visual experience.
          </p>
        </section>

        <section className="content-section">
          <h2>Section 12: Final Thoughts</h2>
          <p>
            PixelBlast demonstrates the power of combining WebGL shaders with React components 
            to create performant, interactive visual experiences.
          </p>
          <p>
            Whether you're building a portfolio, a product landing page, or an experimental 
            web experience, PixelBlast provides a unique and captivating visual foundation.
          </p>
        </section>

        <footer className="footer-section">
          <p>© 2026 PixelBlast Demo • Made with React & WebGL</p>
          <p>Scroll back up to see more!</p>
        </footer>
      </div>
    </div>
  )
}

export default App
