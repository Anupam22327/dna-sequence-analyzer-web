// ========================================
// GET HTML ELEMENTS
// ========================================

const sequenceInput =
    document.getElementById("sequence");

const analyzeButton =
    document.getElementById("analyzeButton");

const buttonText =
    document.getElementById("buttonText");

const loading =
    document.getElementById("loading");

const results =
    document.getElementById("results");

const errorMessage =
    document.getElementById("errorMessage");

const exampleButton =
    document.getElementById("exampleButton");



// ========================================
// EXAMPLE DNA
// ========================================

exampleButton.addEventListener(
    "click",
    function () {

        sequenceInput.value =
            "ATGCGTACCGATGCTAGC";

    }
);



// ========================================
// ANALYZE DNA
// ========================================

analyzeButton.addEventListener(
    "click",
    async function () {


        const sequence =
            sequenceInput.value.trim();


        // Clear old error

        errorMessage.textContent = "";



        // Check empty input

        if (!sequence) {

            errorMessage.textContent =
                "Please enter a DNA sequence.";

            return;

        }



        // Loading

        buttonText.classList.add("hidden");

        loading.classList.remove("hidden");

        analyzeButton.disabled = true;



        try {


            // Send DNA to Flask

            const response =
                await fetch("/analyze", {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        sequence: sequence

                    })

                });



            // Convert response to JSON

            const data =
                await response.json();



            // Check error

            if (!response.ok) {

                throw new Error(
                    data.error
                );

            }



            // Show results

            displayResults(
                data.results
            );


        }


        catch (error) {


            errorMessage.textContent =
                error.message;

            results.classList.add(
                "hidden"
            );

        }



        // Stop loading

        buttonText.classList.remove(
            "hidden"
        );

        loading.classList.add(
            "hidden"
        );

        analyzeButton.disabled =
            false;

    }
);



// ========================================
// DISPLAY RESULTS
// ========================================

function displayResults(data) {


    results.classList.remove(
        "hidden"
    );



    // Sequence length

    document.getElementById(
        "length"
    ).textContent =
        data.length;



    // GC content

    document.getElementById(
        "gcContent"
    ).textContent =
        data.gc_content;



    // AT content

    document.getElementById(
        "atContent"
    ).textContent =
        data.at_content;



    // Nucleotide counts

    document.getElementById(
        "countA"
    ).textContent =
        data.A;


    document.getElementById(
        "countT"
    ).textContent =
        data.T;


    document.getElementById(
        "countG"
    ).textContent =
        data.G;


    document.getElementById(
        "countC"
    ).textContent =
        data.C;



    // Reverse complement

    document.getElementById(
        "reverseComplement"
    ).textContent =
        data.reverse_complement;



    // RNA

    document.getElementById(
        "rnaSequence"
    ).textContent =
        data.rna;



    // Percentages

    document.getElementById(
        "percentA"
    ).textContent =
        data.A_percentage;


    document.getElementById(
        "percentT"
    ).textContent =
        data.T_percentage;


    document.getElementById(
        "percentG"
    ).textContent =
        data.G_percentage;


    document.getElementById(
        "percentC"
    ).textContent =
        data.C_percentage;



    // Progress bars

    document.getElementById(
        "barA"
    ).style.width =
        data.A_percentage + "%";


    document.getElementById(
        "barT"
    ).style.width =
        data.T_percentage + "%";


    document.getElementById(
        "barG"
    ).style.width =
        data.G_percentage + "%";


    document.getElementById(
        "barC"
    ).style.width =
        data.C_percentage + "%";



    // Scroll to results

    results.scrollIntoView({

        behavior: "smooth"

    });

}



// ========================================
// COPY BUTTONS
// ========================================

const copyButtons =
    document.querySelectorAll(
        ".copy-button"
    );


copyButtons.forEach(
    function (button) {


        button.addEventListener(
            "click",
            async function () {


                const targetId =
                    button.getAttribute(
                        "data-target"
                    );


                const text =
                    document.getElementById(
                        targetId
                    ).textContent;


                try {

                    await navigator
                        .clipboard
                        .writeText(text);


                    const originalText =
                        button.textContent;


                    button.textContent =
                        "Copied!";


                    setTimeout(
                        function () {

                            button.textContent =
                                originalText;

                        },
                        1500
                    );


                }

                catch (error) {

                    console.log(
                        "Copy failed:",
                        error
                    );

                }

            }
        );

    }
);