// ========================================
// GET HTML ELEMENTS
// ========================================

const sequenceInput = document.getElementById("sequence");
const analyzeButton = document.getElementById("analyzeButton");
const buttonText = document.getElementById("buttonText");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
const errorMessage = document.getElementById("errorMessage");
const exampleButton = document.getElementById("exampleButton");


// ========================================
// EXAMPLE DNA
// ========================================

exampleButton.addEventListener("click", function () {

    sequenceInput.value = "ATGCGTACCGATGCTAGC";

    // Clear previous error
    errorMessage.textContent = "";

    // Focus on textarea
    sequenceInput.focus();

});


// ========================================
// ANALYZE DNA
// ========================================

analyzeButton.addEventListener("click", async function () {

    const sequence = sequenceInput.value.trim();

    // Clear old error
    errorMessage.textContent = "";

    // Hide previous results
    results.classList.add("hidden");


    // ========================================
    // CHECK EMPTY INPUT
    // ========================================

    if (!sequence) {

        errorMessage.textContent =
            "Please enter a DNA sequence.";

        return;
    }


    // ========================================
    // LOADING
    // ========================================

    buttonText.classList.add("hidden");
    loading.classList.remove("hidden");

    analyzeButton.disabled = true;


    try {

        // ========================================
        // SEND DNA TO FLASK
        // ========================================

        const response = await fetch("/analyze", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                sequence: sequence
            })

        });


        // ========================================
        // READ RESPONSE
        // ========================================

        const data = await response.json();


        // ========================================
        // CHECK SERVER ERROR
        // ========================================

        if (!response.ok || !data.success) {

            throw new Error(
                data.error || "Unable to analyze DNA sequence."
            );

        }


        // ========================================
        // DISPLAY RESULTS
        // ========================================

        displayResults(data.results);

    }


    catch (error) {

        console.error("Analysis error:", error);

        errorMessage.textContent =
            error.message || "Something went wrong.";

        results.classList.add("hidden");

    }


    finally {

        // ========================================
        // STOP LOADING
        // ========================================

        buttonText.classList.remove("hidden");

        loading.classList.add("hidden");

        analyzeButton.disabled = false;

    }

});


// ========================================
// DISPLAY RESULTS
// ========================================

function displayResults(data) {

    results.classList.remove("hidden");


    // ========================================
    // SEQUENCE LENGTH
    // ========================================

    document.getElementById("length").textContent =
        data.length;


    // ========================================
    // GC CONTENT
    // ========================================

    document.getElementById("gcContent").textContent =
        data.gc_content;


    // ========================================
    // AT CONTENT
    // ========================================

    document.getElementById("atContent").textContent =
        data.at_content;


    // ========================================
    // NUCLEOTIDE COUNTS
    // ========================================

    document.getElementById("countA").textContent =
        data.A;

    document.getElementById("countT").textContent =
        data.T;

    document.getElementById("countG").textContent =
        data.G;

    document.getElementById("countC").textContent =
        data.C;


    // ========================================
    // REVERSE COMPLEMENT
    // ========================================

    document.getElementById("reverseComplement").textContent =
        data.reverse_complement;


    // ========================================
    // RNA SEQUENCE
    // ========================================

    document.getElementById("rnaSequence").textContent =
        data.rna;


    // ========================================
    // NUCLEOTIDE PERCENTAGES
    // ========================================

    document.getElementById("percentA").textContent =
        data.A_percentage;

    document.getElementById("percentT").textContent =
        data.T_percentage;

    document.getElementById("percentG").textContent =
        data.G_percentage;

    document.getElementById("percentC").textContent =
        data.C_percentage;


    // ========================================
    // PROGRESS BARS
    // ========================================

    document.getElementById("barA").style.width =
        data.A_percentage + "%";

    document.getElementById("barT").style.width =
        data.T_percentage + "%";

    document.getElementById("barG").style.width =
        data.G_percentage + "%";

    document.getElementById("barC").style.width =
        data.C_percentage + "%";


    // ========================================
    // SCROLL TO RESULTS
    // ========================================

    setTimeout(function () {

        results.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


// ========================================
// COPY BUTTONS
// ========================================

const copyButtons = document.querySelectorAll(".copy-button");


copyButtons.forEach(function (button) {

    button.addEventListener("click", async function () {

        const targetId =
            button.getAttribute("data-target");

        const targetElement =
            document.getElementById(targetId);

        if (!targetElement) {
            return;
        }


        const text =
            targetElement.textContent.trim();


        if (!text) {
            return;
        }


        try {

            await navigator.clipboard.writeText(text);


            const originalText =
                button.textContent;


            button.textContent =
                "Copied!";


            setTimeout(function () {

                button.textContent =
                    originalText;

            }, 1500);

        }


        catch (error) {

            console.error(
                "Copy failed:",
                error
            );

        }

    });

});
