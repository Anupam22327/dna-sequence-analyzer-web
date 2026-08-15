<h1>🧬 DNA Sequence Analyzer</h1>

<p>
A beginner-friendly <strong>bioinformatics web application</strong>
that analyzes DNA sequences using Python, Flask, HTML, CSS, and JavaScript.
</p>

<hr>

<h2>📌 Project Overview</h2>

<p>
DNA Sequence Analyzer allows users to enter a DNA sequence and perform
basic biological sequence analysis.
</p>

<h3>Features</h3>

<ul>
    <li>🧬 DNA sequence validation</li>
    <li>📏 Sequence length calculation</li>
    <li>🧪 GC content calculation</li>
    <li>🔬 AT content calculation</li>
    <li>🔢 Nucleotide composition</li>
    <li>🔄 Reverse complement generation</li>
    <li>🧫 DNA to RNA transcription</li>
    <li>📊 Nucleotide percentage calculation</li>
    <li>📋 Copy DNA/RNA sequences</li>
</ul>

<hr>

<h2>🧬 DNA Sequence Analysis</h2>

<h3>1. DNA Sequence Validation</h3>

<p>
The application accepts the four standard DNA nucleotides:
</p>

<ul>
    <li><strong>A</strong> - Adenine</li>
    <li><strong>T</strong> - Thymine</li>
    <li><strong>G</strong> - Guanine</li>
    <li><strong>C</strong> - Cytosine</li>
</ul>

<p>Example:</p>

<pre>
ATGCGTACCGATGCTAGC
</pre>

<p>Invalid example:</p>

<pre>
ATGXYZ123
</pre>

<hr>

<h3>2. Sequence Length</h3>

<p>
The application calculates the total number of nucleotides in the DNA sequence.
</p>

<p>Example:</p>

<pre>
DNA:
ATGCGTACCGATGCTAGC

Length:
18 bp
</pre>

<hr>

<h3>3. GC Content</h3>

<p>
GC content represents the percentage of Guanine and Cytosine
in the DNA sequence.
</p>

<pre>
GC Content = ((G + C) / Total Length) × 100
</pre>

<hr>

<h3>4. AT Content</h3>

<p>
AT content represents the percentage of Adenine and Thymine
in the DNA sequence.
</p>

<pre>
AT Content = ((A + T) / Total Length) × 100
</pre>

<p>
GC Content + AT Content = approximately 100%
</p>

<hr>

<h3>5. Nucleotide Composition</h3>

<p>
The application counts each nucleotide individually.
</p>

<pre>
DNA:
ATGCGTACCGATGCTAGC

A = 4
T = 3
G = 6
C = 5
</pre>

<hr>

<h3>6. Reverse Complement</h3>

<p>
The application generates the reverse complement of the DNA sequence.
</p>

<p>Base pairing:</p>

<pre>
A → T
T → A
G → C
C → G
</pre>

<p>Example:</p>

<pre>
Original:
ATGCGTACCGATGCTAGC

Reverse Complement:
GCTAGCATCGGTACGCAT
</pre>

<hr>

<h3>7. DNA to RNA Transcription</h3>

<p>
The application converts DNA into RNA by replacing Thymine (T)
with Uracil (U).
</p>

<pre>
DNA:
ATGCGTACCGATGCTAGC

RNA:
AUGCGUACCGAUGCUAGC
</pre>

<hr>

<h3>8. Nucleotide Percentages</h3>

<p>
The application calculates the percentage of each nucleotide.
</p>

<pre>
A = 22.22%
T = 16.67%
G = 33.33%
C = 27.78%
</pre>

<hr>

<h2>🖥️ Technologies Used</h2>

<h3>Frontend</h3>

<ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
</ul>

<h3>Backend</h3>

<ul>
    <li>Python</li>
    <li>Flask</li>
</ul>

<h3>Bioinformatics Concepts</h3>

<ul>
    <li>DNA sequence validation</li>
    <li>Nucleotide composition</li>
    <li>GC content</li>
    <li>AT content</li>
    <li>Complementary base pairing</li>
    <li>Reverse complement</li>
    <li>DNA transcription</li>
    <li>Nucleotide percentage</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<p>All files are kept in the same folder:</p>

<pre>
DNA_Analyzer/
│
├── dna.py
├── index.html
├── style.css
├── script.js
└── README.md
</pre>

<hr>

<h2>🔗 How the Application Works</h2>

<pre>
User
  ↓
index.html
  ↓
JavaScript
  ↓
POST /analyze
  ↓
Flask
  ↓
Python DNA Analysis
  ↓
JSON Results
  ↓
JavaScript
  ↓
Results displayed in Browser
</pre>

<hr>

<h2>⚙️ Installation</h2>

<h3>Step 1 - Install Python</h3>

<p>
Download Python from:
</p>

<p>
<a href="https://www.python.org/">
https://www.python.org/
</a>
</p>

<p>
During installation, enable:
</p>

<pre>
Add Python to PATH
</pre>

<hr>

<h3>Step 2 - Open the Project</h3>

<p>
Open the <strong>DNA_Analyzer</strong> folder in Visual Studio Code.
</p>

<hr>

<h3>Step 3 - Open Terminal</h3>

<p>
In VS Code:
</p>

<pre>
Terminal → New Terminal
</pre>

<hr>

<h3>Step 4 - Install Flask</h3>

<pre>
python -m pip install flask
</pre>

<p>
If Python is not recognized, try:
</p>

<pre>
py -m pip install flask
</pre>

<hr>

<h2>▶️ Running the Application</h2>

<p>Run:</p>

<pre>
python dna.py
</pre>

<p>or:</p>

<pre>
py dna.py
</pre>

<p>
You should see:
</p>

<pre>
* Running on http://127.0.0.1:5000
</pre>

<hr>

<h2>🌐 Open the Website</h2>

<p>
Open Chrome and enter:
</p>

<pre>
http://127.0.0.1:5000
</pre>

<p>
<strong>Important:</strong> Do not open <code>index.html</code> directly.
The Flask server must be running.
</p>

<hr>

<h2>🧪 Example</h2>

<p>Enter:</p>

<pre>
ATGCGTACCGATGCTAGC
</pre>

<p>Click:</p>

<pre>
Analyze DNA
</pre>

<p>Expected results:</p>

<pre>
Sequence Length
18 bp

GC Content
61.11%

AT Content
38.89%

A = 4
T = 3
G = 6
C = 5

RNA:
AUGCGUACCGAUGCUAGC

Reverse Complement:
GCTAGCATCGGTACGCAT
</pre>

<hr>

<h2>🔧 API Endpoint</h2>

<p>
The Flask backend provides:
</p>

<pre>
POST /analyze
</pre>

<p>Example request:</p>

<pre>
{
    "sequence": "ATGCGTACCGATGCTAGC"
}
</pre>

<p>Example response:</p>

<pre>
{
    "success": true,
    "results": {
        "length": 18,
        "A": 4,
        "T": 3,
        "G": 6,
        "C": 5,
        "gc_content": 61.11,
        "at_content": 38.89,
        "reverse_complement": "GCTAGCATCGGTACGCAT",
        "rna": "AUGCGUACCGAUGCUAGC"
    }
}
</pre>

<hr>

<h2>🛠️ Troubleshooting</h2>

<h3>pip is not recognized</h3>

<pre>
python -m pip install flask
</pre>

<p>or:</p>

<pre>
py -m pip install flask
</pre>

<h3>Failed to fetch</h3>

<p>
Make sure Flask is running:
</p>

<pre>
python dna.py
</pre>

<p>
Then open:
</p>

<pre>
http://127.0.0.1:5000
</pre>

<p>
Do not open:
</p>

<pre>
file:///.../index.html
</pre>

<p>
Also make sure VS Code Live Server is not being used.
</p>

<hr>

<h2>🚀 Future Improvements</h2>

<h3>Version 2</h3>

<ul>
    <li>FASTA file upload</li>
    <li>Protein translation</li>
    <li>ORF detection</li>
    <li>DNA sequence statistics</li>
    <li>Sequence visualization</li>
    <li>Download analysis report</li>
</ul>

<h3>Version 3</h3>

<ul>
    <li>Multiple sequence analysis</li>
    <li>Sequence alignment</li>
    <li>Mutation detection</li>
    <li>BLAST integration</li>
    <li>Biopython integration</li>
</ul>

<h3>Version 4</h3>

<ul>
    <li>NCBI database integration</li>
    <li>Real biological datasets</li>
    <li>Advanced sequence analysis</li>
    <li>Interactive charts</li>
    <li>User accounts</li>
    <li>Cloud deployment</li>
</ul>

<hr>

<h2>🎯 Learning Objectives</h2>

<ul>
    <li>Python programming</li>
    <li>Flask web development</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>REST API concepts</li>
    <li>JSON</li>
    <li>Basic bioinformatics</li>
    <li>DNA sequence analysis</li>
    <li>Frontend-backend communication</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>

<p>
<strong>Anupam Gautam</strong>
</p>

<p>
BTech Biotechnology Student
</p>

<p>Interests:</p>

<ul>
    <li>Bioinformatics</li>
    <li>Computational Biology</li>
    <li>Data Science</li>
    <li>Python</li>
    <li>Biotechnology</li>
</ul>

<hr>

<h2>📜 License</h2>

<p>
This project is created for educational and learning purposes.
</p>

<hr>

<h2>⭐ Project Goal</h2>

<p>
The goal of this project is to demonstrate how programming and
data science can be applied to biological data.
</p>

<pre>
Biotechnology
      +
Programming
      +
Data Science
      ↓
Bioinformatics
</pre>

<hr>

<h2>🧬 DNA Sequence Analyzer</h2>

<p>
<strong>
Built with Python + Flask + HTML + CSS + JavaScript
</strong>
</p>

<p>
Turning biological sequences into meaningful data.
</p>
