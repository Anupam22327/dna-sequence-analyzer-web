from flask import Flask, request, jsonify, render_template

app = Flask(
    __name__,
    template_folder="../templates",
    static_folder="../static"
)


# ==============================
# HOME PAGE
# ==============================

@app.route("/")
def home():
    return render_template("index.html")


# ==============================
# DNA VALIDATION
# ==============================

def validate_sequence(sequence):
    valid_bases = {"A", "T", "G", "C"}

    return all(
        base in valid_bases
        for base in sequence
    )


# ==============================
# DNA ANALYSIS
# ==============================

def analyze_sequence(sequence):

    length = len(sequence)

    A = sequence.count("A")
    T = sequence.count("T")
    G = sequence.count("G")
    C = sequence.count("C")

    gc_content = ((G + C) / length) * 100
    at_content = ((A + T) / length) * 100

    A_percentage = (A / length) * 100
    T_percentage = (T / length) * 100
    G_percentage = (G / length) * 100
    C_percentage = (C / length) * 100

    complement = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    }

    reverse_complement = "".join(
        complement[base]
        for base in reversed(sequence)
    )

    rna = sequence.replace("T", "U")

    return {
        "sequence": sequence,
        "length": length,

        "A": A,
        "T": T,
        "G": G,
        "C": C,

        "gc_content": round(gc_content, 2),
        "at_content": round(at_content, 2),

        "A_percentage": round(A_percentage, 2),
        "T_percentage": round(T_percentage, 2),
        "G_percentage": round(G_percentage, 2),
        "C_percentage": round(C_percentage, 2),

        "reverse_complement": reverse_complement,
        "rna": rna
    }


# ==============================
# ANALYZE API
# ==============================

@app.route("/analyze", methods=["POST"])
def analyze():

    try:

        data = request.get_json(silent=True)

        if not data:
            return jsonify({
                "success": False,
                "error": "No data received."
            }), 400

        sequence = data.get("sequence", "")

        if not isinstance(sequence, str):
            return jsonify({
                "success": False,
                "error": "DNA sequence must be text."
            }), 400

        # Remove spaces and line breaks
        sequence = sequence.replace(" ", "")
        sequence = sequence.replace("\n", "")
        sequence = sequence.replace("\r", "")
        sequence = sequence.replace("\t", "")

        # Convert to uppercase
        sequence = sequence.upper()

        # Check empty sequence
        if not sequence:
            return jsonify({
                "success": False,
                "error": "Please enter a DNA sequence."
            }), 400

        # Validate DNA
        if not validate_sequence(sequence):
            return jsonify({
                "success": False,
                "error": "Invalid DNA sequence. Only A, T, G and C are allowed."
            }), 400

        # Analyze DNA
        results = analyze_sequence(sequence)

        return jsonify({
            "success": True,
            "results": results
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==============================
# LOCAL DEVELOPMENT
# ==============================

if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
