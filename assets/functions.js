const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.documentElement.classList.add('dark-mode');
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.addEventListener('DOMContentLoaded', function() {
    const infoIcons = document.querySelectorAll('.info-icon');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const infoBubble = this.closest('.topic-item').querySelector('.info-bubble');
            infoBubble.classList.toggle('active');
            
            // Close other open bubbles
            document.querySelectorAll('.info-bubble.active').forEach(bubble => {
                if (bubble !== infoBubble) {
                    bubble.classList.remove('active');
                }
            });
        });
    });

    // Close info bubbles when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.topic-item')) {
            document.querySelectorAll('.info-bubble.active').forEach(bubble => {
                bubble.classList.remove('active');
            });
        }
    });
});