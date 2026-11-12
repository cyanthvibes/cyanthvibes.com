document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a.social-link").forEach((link) => {
        const brandColor = getComputedStyle(link).getPropertyValue("--brand-color").trim();
        const match = brandColor.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);

        if (!match) return;

        const [red, green, blue] = match.slice(1).map((value) => parseInt(value, 16) / 255);
        const linearize = (value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
        const luminance =
            0.2126 * linearize(red) +
            0.7152 * linearize(green) +
            0.0722 * linearize(blue);
        const blackContrast = (luminance + 0.05) / 0.05;
        const whiteContrast = 1.05 / (luminance + 0.05);

        link.style.setProperty(
            "--hover-foreground",
            blackContrast >= whiteContrast ? "#000" : "#fff"
        );
    });
});
