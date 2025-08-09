(function() {
    'use strict';
    
    // Check if it's a touch device - don't run on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return;
    }
    
    let glowCursor = null;
    let isInitialized = false;
    
    function createGlowCursor() {
        if (glowCursor) return;
        
        glowCursor = document.createElement('div');
        glowCursor.className = 'glow-cursor';
        glowCursor.style.cssText = `
            position: fixed;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            border-radius: 50%;
            transition: all 0.3s ease;
            transform: translate(-50%, -50%);
            display: block;
        `;
        
        document.body.appendChild(glowCursor);
    }
    
    function addGlobalStyles() {
        // Check if styles already exist
        if (document.getElementById('glow-cursor-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'glow-cursor-styles';
        style.textContent = `
            body {
                cursor: none !important;
            }
            
            * {
                cursor: none !important;
            }
            
            .glow-cursor.hover {
                background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%);
                width: 200px;
                height: 200px;
            }
            
            @media (hover: none) and (pointer: coarse) {
                body, * {
                    cursor: auto !important;
                }
                
                .glow-cursor {
                    display: none !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    function handleMouseMove(e) {
        if (!glowCursor) return;
        
        glowCursor.style.left = e.clientX + 'px';
        glowCursor.style.top = e.clientY + 'px';
    }
    
    function addHoverEffects() {
        // Common interactive selectors
        const selectors = [
            'a', 'button', 'input', 'textarea', 'select',
            '.clickable', '.header-rt-ele', '.mobile-menu-item',
            '.pacifico-regular', '.gmailIcon-cls', '.linkedinIcon-cls', '.githubIcon-cls',
            '[onclick]', '[role="button"]'
        ];
        
        const interactiveElements = document.querySelectorAll(selectors.join(', '));
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                if (glowCursor) {
                    glowCursor.classList.add('hover');
                }
            });
            
            element.addEventListener('mouseleave', () => {
                if (glowCursor) {
                    glowCursor.classList.remove('hover');
                }
            });
        });
    }
    
    function initGlowCursor() {
        if (isInitialized) return;
        
        try {
            addGlobalStyles();
            createGlowCursor();
            
            // Add mouse move listener
            document.addEventListener('mousemove', handleMouseMove);
            
            // Add hover effects
            addHoverEffects();
            
            // Re-add hover effects when new content is loaded (for dynamic content)
            const observer = new MutationObserver(() => {
                addHoverEffects();
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            isInitialized = true;
            console.log('Glow cursor initialized successfully');
            
        } catch (error) {
            console.error('Error initializing glow cursor:', error);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlowCursor);
    } else {
        // DOM is already ready
        setTimeout(initGlowCursor, 100);
    }
    
    // Backup initialization
    window.addEventListener('load', () => {
        if (!isInitialized) {
            initGlowCursor();
        }
    });
    
})();