function animUp() {
            $("#balloon").animate({ top: "-3px" }, "slow", "swing", animDown);
        }


        function animDown() {
            $("#balloon").animate({ top: "1px" }, "slow", "swing", animUp);
        }

    
        $(document).ready(function() {
            animUp();
        });