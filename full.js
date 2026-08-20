const fullscreenBtn = document.getElementById("fullscreenBtn");

if (fullscreenBtn) {

    fullscreenBtn.addEventListener("click", async () => {

        try {

            if (!document.fullscreenElement) {

                await document.documentElement.requestFullscreen();

                sessionStorage.setItem(
                    "dentawyFullscreen",
                    "true"
                );

            } else {

                await document.exitFullscreen();

                sessionStorage.removeItem(
                    "dentawyFullscreen"
                );

            }

        } catch (error) {

            console.error("Fullscreen error:", error);

        }

    });


    document.addEventListener("fullscreenchange", () => {

        const icon =
            fullscreenBtn.querySelector("i");

        if (document.fullscreenElement) {

            fullscreenBtn.classList.add(
                "is-fullscreen"
            );

            if (icon) {
                icon.className =
                    "fa-solid fa-compress";
            }

            fullscreenBtn.title =
                "Exit fullscreen";

        } else {

            fullscreenBtn.classList.remove(
                "is-fullscreen"
            );

            if (icon) {
                icon.className =
                    "fa-solid fa-expand";
            }

            fullscreenBtn.title =
                "Fullscreen";
        }

    });

}