export interface BiotechnologyLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  biotechField: string;
  labTechniques: string[];
  resources: Resource[];
  caseStudies: CaseStudy[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  materials: string[];
  procedure: string[];
  expectedResults: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'research' | 'database' | 'tool' | 'journal' | 'protocol' | 'software';
  description: string;
}

interface CaseStudy {
  title: string;
  organization: string;
  problem: string;
  biotechSolution: string;
  impact: string;
  innovations: string[];
}

export const biotechnologyLessons: BiotechnologyLesson[] = [
  {
    id: 'biotech-fundamentals-genetic-engineering',
    title: 'Bài 1: Biotechnology Fundamentals & Genetic Engineering',
    description: 'Khám phá biotechnology cơ bản, genetic engineering techniques, DNA manipulation, gene editing với CRISPR. Học molecular biology fundamentals và bioethics.',
    videoUrl: 'https://www.youtube.com/watch?v=jAhjPd4uNFY',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '150 phút',
    biotechField: 'Genetic Engineering',
    objectives: [
      'Understand biotechnology fundamentals và applications across industries',
      'Master genetic engineering principles và molecular biology techniques',
      'Learn CRISPR gene editing technology và its revolutionary applications',
      'Explore bioethics, safety protocols, và regulatory frameworks',
      'Apply genetic modification techniques cho real-world problem solving'
    ],
    prerequisites: [
      'Basic biology knowledge (DNA, RNA, proteins)',
      'Understanding của cellular biology',
      'High school chemistry concepts',
      'Scientific method và laboratory safety awareness'
    ],
    labTechniques: [
      'PCR (Polymerase Chain Reaction)',
      'Gel Electrophoresis',
      'DNA Extraction và Purification',
      'Transformation trong E. coli',
      'CRISPR-Cas9 Gene Editing',
      'Protein Expression và Purification'
    ],
    exercises: [
      {
        title: 'CRISPR Gene Editing Virtual Lab - Engineering Insulin Production',
        description: 'Design và execute complete CRISPR gene editing experiment để enhance insulin production trong bacterial cells, covering target design, guide RNA creation, và therapeutic applications',
        difficulty: 'Nâng cao',
        solution: "# CRISPR Gene Editing for Enhanced Insulin Production: Complete Laboratory Protocol\n\n## 1. Project Overview & Objective\n\n### Scientific Goal:\nEngineer E. coli bacteria để produce human insulin at enhanced levels using CRISPR-Cas9 gene editing technology, creating a more efficient và cost-effective insulin production system cho diabetes treatment.\n\n### Background Science:\n```\nDiabetes Impact:\n- 463 million people worldwide have diabetes\n- Type 1 diabetes requires daily insulin injections\n- Current insulin costs: $100-300+ per month\n- Biotechnology solution: Engineered bacteria producing human insulin\n\nCRISPR Technology:\n- Clustered Regularly Interspaced Short Palindromic Repeats\n- Cas9 nuclease cuts DNA at specific locations\n- Guide RNA directs Cas9 to target sequences\n- Allows precise genetic modifications\n- Revolutionary tool for biotechnology applications\n```\n\n## 2. Experimental Design & Strategy\n\n### Target Gene Analysis:\n```\nHuman Insulin Gene (INS):\n- Location: Chromosome 11p15.5\n- Size: 1,430 base pairs\n- Structure: 2 exons, 1 intron\n- Product: Proinsulin → processed to mature insulin\n- Challenges: Eukaryotic gene expression trong prokaryotic host\n\nEngineering Strategy:\n1. Synthesize optimized insulin gene cho E. coli expression\n2. Design CRISPR system để integrate gene into bacterial chromosome\n3. Optimize expression levels through promoter engineering\n4. Enhance protein folding và processing pathways\n5. Scale up production cho pharmaceutical applications\n```\n\n### CRISPR System Design:\n```\n# Guide RNA (gRNA) Design cho E. coli Integration Site\n\nTarget Sequence Selection:\n- Integration site: lac operon region trong E. coli genome\n- Rationale: Well-characterized, inducible expression system\n- Target sequence: 5'-GCGTTATACATGCGTTGGCG-3'\n- PAM sequence: NGG (required cho Cas9 activity)\n\n# gRNA Sequence Design\ncrRNA sequence: 5'-GCGUUAUACAUGCGUUGGCG-3'\ntracrRNA: Universal tracrRNA sequence\nSpacer length: 20 nucleotides (optimal cho Cas9 specificity)\n\n# Cas9 Protein Selection:\n- Streptococcus pyogenes Cas9 (SpCas9)\n- High efficiency và specificity\n- Well-characterized PAM requirements (NGG)\n- Extensive literature support\n```\n\n## 3. Laboratory Materials & Equipment\n\n### Biological Materials:\n```\nBacterial Strains:\n- E. coli DH5α (cloning host)\n- E. coli BL21(DE3) (expression host)\n- Competent cells cho transformation\n\nPlasmids & Vectors:\n- pCas9 (Cas9 expression plasmid)\n- pgRNA (guide RNA expression plasmid)\n- pInsulin (insulin gene donor template)\n- Control plasmids cho validation\n\nMolecular Reagents:\n- Restriction enzymes (EcoRI, BamHI, HindIII)\n- T4 DNA ligase\n- Taq polymerase\n- dNTPs\n- Primers cho PCR amplification\n- Antibiotics (ampicillin, kanamycin, chloramphenicol)\n```\n\n### Laboratory Equipment:\n```\nEssential Equipment:\n- PCR thermal cycler\n- Gel electrophoresis apparatus\n- UV transilluminator\n- Incubator shakers (37°C)\n- Centrifuge (benchtop và microcentrifuge)\n- Autoclave\n- Laminar flow hood\n- Spectrophotometer\n- Microscope\n\nSpecialized Equipment:\n- Electroporator cho bacterial transformation\n- Protein purification system (FPLC)\n- SDS-PAGE apparatus\n- Western blotting equipment\n- ELISA plate reader\n```\n\n## 4. Detailed Experimental Protocol\n\n### Phase 1: CRISPR Component Preparation\n\n#### Step 1: Guide RNA Cloning\n```bash\n# Design và synthesize gRNA oligonucleotides\nForward oligo: 5'-CACCGCGTTATACATGCGTTGGCG-3'\nReverse oligo: 5'-AAACCGCCAACGCATGTATAACGC-3'\n\n# Annealing reaction\n1. Mix forward và reverse oligos (100 μM each)\n2. Heat to 95°C cho 5 minutes\n3. Cool slowly to room temperature (2°C/minute)\n4. Dilute to 10 μM working concentration\n\n# Cloning into pgRNA vector\n1. Digest pgRNA plasmid với BbsI enzyme\n2. Treat với alkaline phosphatase\n3. Ligate annealed oligos into linearized vector\n4. Transform into E. coli DH5α\n5. Select on kanamycin plates\n6. Verify clones bằng sequencing\n```\n\n#### Step 2: Insulin Gene Optimization\n```python\n# Codon optimization for E. coli expression\noriginal_sequence = \"ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGACCCAGCCGCAGCCTTTGTGAACCAACACCTGTGCGGCTCACACCTGGTGGAAGCTCTCTACCTAGTGTGCGGGGAACGAGGCTTCTTCTACACACCCAAGACCCGCCGGGAGGCAGAGGACCTGCAGGTGGGGCAGGTGGAGCTGGGCGGGGGCCCTGGTGCAGGCAGCCTGCAGCCCTTGGCCCTGGAGGGGTCCCTGCAGAAGCGTGGCATTGTGGAACAATGCTGTACCAGCATCTGCTCCCTCTACCAGCTGGAGAACTACTGCAACTAGACGCAGCCCGCAGGCAGCCCCACACCCGCCGCCTCCTGCACCGAGAGAGATGGAATAAAGCCCTTGAACCAGC\"\n\n# E. coli optimized sequence\noptimized_sequence = \"\"\"\nATGGCTCTGTGGATGCGTCTGCTGCCGCTGCTGGCTCTGCTGGCTCTGTGGGGTCCTGATCCGGCTGCTGCTTTTGTGAACCAGCATCTGTGTGGTTCTCATCCTGGTGGTAGTTCTCTGTATCTGGTGTGTGGTGAACGTGGTTTTTTTTATACTCCGAAAGATCCGCCTGGTGGTCAGCGTGATCTGCAGGTGGGTCAGGTGGAGCTGGGTGGTGGTCCGGGTGCTGGTAGTCTGCAGCCGCTGGCTCTGGAGGGTTCTCTGCAGAAGCGTGGTATTGTGGAACAATGTTGTACCAGCATCTGCTTCCGCTGTATCAGCTGGAGAATTATTGCAATCGTCGTCAGCCGCAGGCTGCTCCGCATCCGCCGCCTCCTGCATCGTGAGCGTCTGGAATAAAGCTCTGAATCAGC\n\"\"\"\n\n# Verification\nprint(f\"Original length: {len(original_sequence)} bp\")\nprint(f\"Optimized length: {len(optimized_sequence)} bp\")\nprint(f\"GC content optimization: Improved cho E. coli expression\")\n```\n\n#### Step 3: Donor Template Construction\n```bash\n# Create donor template với homology arms\nUpstream_homology: 500 bp sequence upstream của integration site\nOptimized_insulin_gene: Codon-optimized insulin sequence\nDownstream_homology: 500 bp sequence downstream của integration site\n\n# PCR amplification của components\n1. Amplify upstream homology arm:\n   Forward primer: 5'-GCTAGCATGCGTTATACATGC-3'\n   Reverse primer: 5'-CTCGAGGTACCGCGTTATAC-3'\n\n2. Amplify insulin gene:\n   Forward primer: 5'-GTACCATGGCTCTGTGGATG-3'\n   Reverse primer: 5'-GGATCCTTACAGCTGGAG-3'\n\n3. Amplify downstream homology arm:\n   Forward primer: 5'-GGATCCGCGTTATACATGCG-3'\n   Reverse primer: 5'-AAGCTTGTACCGCGTTATAC-3'\n\n# Assembly bằng overlap PCR\n1. Combine all three fragments trong equimolar ratios\n2. Perform overlap PCR to create continuous donor template\n3. Clone into cloning vector cho amplification\n4. Verify bằng restriction mapping và sequencing\n```\n\n## 5. CRISPR Transformation & Selection\n\n### Bacterial Transformation Protocol:\n```bash\n# Prepare competent E. coli cells\n1. Grow E. coli overnight trong LB medium\n2. Dilute 1:100 và grow to OD600 = 0.5\n3. Harvest cells bằng centrifugation (4°C, 3000g, 10 min)\n4. Wash 3x với ice-cold 0.1 M CaCl2\n5. Resuspend trong 0.1 M CaCl2 với 15% glycerol\n6. Aliquot và store at -80°C\n\n# Co-transformation với CRISPR components\n1. Thaw competent cells on ice\n2. Add plasmids: pCas9 (100 ng) + pgRNA (50 ng) + donor template (200 ng)\n3. Incubate on ice cho 30 minutes\n4. Heat shock: 42°C cho 90 seconds\n5. Return to ice cho 2 minutes\n6. Add SOC medium và recover at 37°C cho 1 hour\n7. Plate on selective media (ampicillin + kanamycin)\n8. Incubate overnight at 37°C\n```\n\n### Screening cho Successful Integration:\n```bash\n# PCR screening strategy\n1. Colony PCR với flanking primers:\n   Forward: Outside upstream homology arm\n   Reverse: Inside insulin gene\n   Expected size: 800 bp (integration) vs 300 bp (wild-type)\n\n2. Confirmation PCR:\n   Forward: Inside insulin gene\n   Reverse: Outside downstream homology arm\n   Expected size: 750 bp (only trong integrated clones)\n\n# Verification protocol\n1. Select 20-30 colonies cho initial screening\n2. Perform colony PCR với screening primers\n3. Analyze products bằng gel electrophoresis\n4. Sequence positive clones để confirm correct integration\n5. Test insulin expression bằng SDS-PAGE và Western blotting\n```\n\n## 6. Protein Expression & Purification\n\n### Insulin Expression Optimization:\n```bash\n# Expression testing protocol\n1. Inoculate verified clones into LB + antibiotics\n2. Grow to OD600 = 0.6 at 37°C\n3. Induce với IPTG (0.1-1.0 mM range testing)\n4. Sample at multiple time points (0, 2, 4, 6, 8 hours)\n5. Analyze bằng SDS-PAGE để determine optimal conditions\n\n# Optimal conditions determined:\n- IPTG concentration: 0.5 mM\n- Induction temperature: 30°C (reduced inclusion bodies)\n- Expression time: 4 hours\n- Media: LB với 2% glucose\n```\n\n### Protein Purification Protocol:\n```bash\n# Cell lysis và protein extraction\n1. Harvest cells bằng centrifugation (6000g, 10 min)\n2. Resuspend trong lysis buffer (20 mM Tris pH 8.0, 500 mM NaCl)\n3. Add lysozyme (1 mg/ml) và incubate 30 min on ice\n4. Sonicate: 10 pulses, 30 sec each, with cooling\n5. Centrifuge để remove cell debris (12000g, 20 min)\n\n# Nickel affinity purification (if His-tagged)\n1. Apply lysate to Ni-NTA column\n2. Wash với binding buffer (20 mM imidazole)\n3. Elute với increasing imidazole concentrations\n4. Analyze fractions bằng SDS-PAGE\n5. Pool insulin-containing fractions\n\n# Protein refolding (for inclusion bodies)\n1. Dissolve inclusion bodies trong 6 M guanidine-HCl\n2. Slowly dilute into refolding buffer over 24 hours\n3. Remove aggregates bằng centrifugation\n4. Concentrate và store trong appropriate buffer\n```\n\n## 7. Quality Control & Analysis\n\n### Protein Characterization:\n```bash\n# SDS-PAGE analysis\n1. Prepare 15% polyacrylamide gel\n2. Load samples: molecular weight markers, crude extract, purified protein\n3. Run at 150V cho 1 hour\n4. Stain với Coomassie Blue\n5. Expected insulin size: ~6 kDa (A chain) + ~3 kDa (B chain)\n\n# Western blotting confirmation\n1. Transfer proteins to PVDF membrane\n2. Block với 5% milk trong TBST\n3. Incubate với anti-insulin antibody (1:1000)\n4. Secondary antibody: HRP-conjugated (1:5000)\n5. Develop với chemiluminescent substrate\n6. Confirm insulin-specific bands\n```\n\n### Functional Activity Testing:\n```bash\n# Glucose uptake assay trong cell culture\n1. Prepare 3T3-L1 adipocytes trong 96-well plates\n2. Treat cells với purified insulin at various concentrations\n3. Add fluorescent glucose analog (2-NBDG)\n4. Measure glucose uptake bằng fluorescence\n5. Compare to commercial insulin standard\n\n# Expected results:\n- Dose-dependent glucose uptake\n- EC50 similar to commercial insulin\n- Maximum response at 100 nM insulin\n- Biological activity confirmation\n```\n\n## 8. Data Analysis & Interpretation\n\n### Quantitative Analysis:\n```python\n# Protein yield calculation\ntotal_protein_mg = 150  # mg from 1L culture\ninsulin_purity_percent = 85  # from densitometry\ninsulin_yield_mg = total_protein_mg * (insulin_purity_percent/100)\n\nprint(f\"Insulin yield: {insulin_yield_mg} mg per liter culture\")\nprint(f\"Commercial comparison: 10x improvement over standard methods\")\n\n# Economic impact analysis\nproduction_cost_per_mg = 2.50  # USD\ncommercial_insulin_cost = 75.00  # USD per mg\ncost_reduction = ((commercial_insulin_cost - production_cost_per_mg) / commercial_insulin_cost) * 100\n\nprint(f\"Cost reduction: {cost_reduction:.1f}%\")\nprint(f\"Potential savings: ${commercial_insulin_cost - production_cost_per_mg:.2f} per mg\")\n```\n\n### Statistical Analysis:\n```r\n# R script for activity assay analysis\nlibrary(drc)\n\n# Dose-response curve fitting\ninsulin_conc <- c(0.1, 0.3, 1, 3, 10, 30, 100, 300)  # nM\nglucose_uptake <- c(12, 18, 28, 45, 68, 82, 95, 97)  # relative units\n\n# Fit four-parameter logistic model\nmodel <- drm(glucose_uptake ~ insulin_conc, fct = LL.4())\nsummary(model)\n\n# Calculate EC50\nED(model, 50)\n# Expected: ~10 nM (similar to commercial insulin)\n\n# Statistical significance testing\nt.test(engineered_insulin_activity, commercial_insulin_activity)\n# p-value < 0.05 indicates significant activity\n```\n\n## 9. Results Summary & Conclusions\n\n### Experimental Outcomes:\n```\nCRISPR Integration Efficiency: 75% của screened colonies\nInsulin Expression Level: 150 mg/L culture\nProtein Purity: 85% after single-step purification\nBiological Activity: 95% của commercial insulin standard\nCost Reduction: 96% compared to current production methods\n\nKey Achievements:\n✓ Successful CRISPR-mediated gene integration\n✓ High-level insulin expression trong E. coli\n✓ Functional protein với biological activity\n✓ Scalable production method\n✓ Significant cost reduction potential\n```\n\n### Future Applications:\n```\nImmediate Applications:\n- Scale-up cho pharmaceutical production\n- Optimization cho different insulin variants\n- Development của long-acting insulin formulations\n- Application to other therapeutic proteins\n\nLong-term Impact:\n- Democratization của insulin access globally\n- Template cho other protein therapeutics\n- Advancement của CRISPR biotechnology applications\n- Contribution to personalized medicine\n```\n\nThis comprehensive CRISPR gene editing experiment demonstrates the power của modern biotechnology to address global health challenges while providing hands-on experience với cutting-edge molecular biology techniques.",
        materials: [
          'E. coli bacterial strains (DH5α, BL21)',
          'CRISPR-Cas9 system components',
          'Human insulin gene (optimized)',
          'PCR reagents và primers',
          'Restriction enzymes và DNA ligase',
          'Protein purification equipment'
        ],
        procedure: [
          'Design guide RNAs cho target site selection',
          'Clone CRISPR components into expression vectors',
          'Transform bacteria với CRISPR system',
          'Screen cho successful gene integration',
          'Optimize protein expression conditions',
          'Purify insulin protein và test activity'
        ],
        expectedResults: 'Successfully engineered E. coli producing functional human insulin at 150+ mg/L với 95% biological activity compared to commercial insulin'
      }
    ],
    realWorldApplications: [
      'Pharmaceutical protein production (insulin, growth hormones, vaccines)',
      'Agricultural biotechnology và crop improvement',
      'Medical research và drug discovery',
      'Biofuel production và environmental cleanup',
      'Industrial enzyme production và optimization'
    ],
    resources: [
      {
        title: 'NCBI Biotechnology Information',
        url: 'https://www.ncbi.nlm.nih.gov/guide/',
        type: 'database',
        description: 'Comprehensive molecular biology database với genetic sequences và research tools'
      },
      {
        title: 'CRISPR Design Tools',
        url: 'https://crispr.mit.edu/',
        type: 'tool',
        description: 'Web-based CRISPR guide RNA design và off-target analysis'
      }
    ],
    caseStudies: [
      {
        title: 'Genentech Insulin Revolution: First Recombinant Human Insulin',
        organization: 'Genentech, Inc. & Eli Lilly',
        problem: 'Diabetes patients dependent on animal insulin với limited supply, allergic reactions, và batch variability. Growing diabetic population creating supply crisis, estimated 100M+ diabetics worldwide by 2000.',
        biotechSolution: 'Pioneered recombinant DNA technology để produce human insulin trong E. coli bacteria. Cloned human insulin gene into bacterial plasmids, optimized expression systems, và developed large-scale fermentation processes cho commercial production.',
        impact: 'Humulin became first FDA-approved recombinant DNA drug (1982). Revolutionized diabetes treatment với unlimited supply của pure human insulin. Generated $2B+ annual revenue, treating 50M+ diabetics globally. Eliminated animal insulin allergies và standardized potency.',
        innovations: [
          'First commercial application của recombinant DNA technology',
          'Established biotechnology industry business model',
          'Advanced protein expression và purification techniques',
          'Scaled bacterial fermentation cho pharmaceutical production',
          'Created regulatory pathway cho biotech therapeutics'
        ]
      }
    ]
  },
  {
    id: 'medical-biotechnology-drug-discovery',
    title: 'Bài 2: Medical Biotechnology & Drug Discovery Pipeline',
    description: 'Explore medical biotechnology applications, drug discovery processes, clinical trials, personalized medicine. Learn bioinformatics, molecular diagnostics, và therapeutic development.',
    videoUrl: 'https://www.youtube.com/watch?v=YWcJ9-2cRAY',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    biotechField: 'Medical Biotechnology',
    objectives: [
      'Understand drug discovery pipeline từ target identification to market',
      'Master bioinformatics tools cho genomic analysis và drug design',
      'Learn personalized medicine approaches và precision therapeutics',
      'Explore clinical trial design, regulatory requirements, và approval processes',
      'Apply biotechnology cho disease diagnosis và treatment development'
    ],
    prerequisites: [
      'Molecular biology fundamentals',
      'Understanding của genetics và genomics',
      'Basic pharmacology concepts',
      'Statistical analysis knowledge'
    ],
    labTechniques: [
      'High-Throughput Screening (HTS)',
      'Next-Generation Sequencing (NGS)',
      'Protein Crystallography',
      'Cell Culture và Tissue Engineering',
      'Biomarker Discovery',
      'Clinical Trial Data Analysis'
    ],
    exercises: [
      {
        title: 'Complete Drug Discovery Project - Cancer Immunotherapy Development',
        description: 'Execute end-to-end drug discovery pipeline cho novel cancer immunotherapy, including target validation, compound screening, preclinical testing, và clinical trial design',
        difficulty: 'Chuyên gia',
        solution: "# Complete Cancer Immunotherapy Drug Discovery Pipeline\n\n## 1. Project Overview & Therapeutic Rationale\n\n### Cancer Immunotherapy Background:\n```\nCancer Statistics (Global Impact):\n- 19.3 million new cases annually\n- 10 million deaths per year\n- $150+ billion annual treatment costs\n- Traditional treatments: Surgery, chemotherapy, radiation\n- Limitations: Systemic toxicity, drug resistance, cancer recurrence\n\nImmunotherapy Revolution:\n- Harness immune system to fight cancer\n- Checkpoint inhibitors: $20B+ market\n- CAR-T therapy: $3B+ market growing rapidly\n- Target identification: PD-1/PD-L1, CTLA-4, LAG-3, TIM-3\n- Success stories: Pembrolizumab (Keytruda), Nivolumab (Opdivo)\n```\n\n### Novel Target: LAG-3 (Lymphocyte Activation Gene 3)\n```\nLAG-3 Biology:\n- Immune checkpoint receptor on T cells và NK cells\n- Inhibits T cell activation và proliferation\n- Upregulated trong tumor microenvironment\n- Synergistic effects với PD-1 inhibition\n- Therapeutic opportunity: Dual pathway blockade\n\nTarget Validation Data:\n- LAG-3 expression: 60% của solid tumors\n- Correlation với poor prognosis trong melanoma, lung cancer\n- Preclinical studies: LAG-3 knockout mice show enhanced anti-tumor immunity\n- Human genetic evidence: LAG-3 polymorphisms affect cancer risk\n```\n\n## 2. Target Identification & Validation\n\n### Bioinformatics Analysis:\n```python\n# Genomic analysis của LAG-3 expression trong cancer\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy import stats\n\n# TCGA data analysis (simulated)\ntcga_data = {\n    'tumor_type': ['Melanoma', 'Lung_Cancer', 'Breast_Cancer', 'Colon_Cancer'],\n    'lag3_high_expression': [68, 52, 34, 41],  # percentage of patients\n    'median_survival_months': [18, 14, 28, 22],\n    'response_to_pd1': [25, 18, 35, 29]  # percentage response rate\n}\n\ndf = pd.DataFrame(tcga_data)\n\n# Correlation analysis\ncorrelation = stats.pearsonr(df['lag3_high_expression'], df['response_to_pd1'])\nprint(f\"LAG-3 expression vs PD-1 response correlation: r = {correlation[0]:.3f}, p = {correlation[1]:.3f}\")\n\n# Clinical hypothesis\nprint(\"\\nClinical Hypothesis:\")\nprint(\"High LAG-3 expression correlates với poor PD-1 response\")\nprint(\"Dual LAG-3/PD-1 blockade may improve outcomes\")\n\n# Market opportunity\nprint(\"\\nMarket Analysis:\")\nprint(f\"Total addressable market: $45B (cancer immunotherapy)\")\nprint(f\"Serviceable market: $8B (LAG-3 targetable cancers)\")\nprint(f\"Projected peak sales: $2-5B annually\")\n```\n\n### Protein Structure Analysis:\n```bash\n# LAG-3 protein structure investigation\n# Using PyMOL và Protein Data Bank (PDB)\n\n# Download LAG-3 crystal structure\nwget https://files.rcsb.org/download/6TPF.pdb\n\n# PyMOL analysis commands\npymol 6TPF.pdb\n\n# Key structural features identified:\n# - Immunoglobulin-like domains (D1-D4)\n# - MHC Class II binding interface\n# - Potential druggable pockets trong D1 domain\n# - Antibody binding epitopes mapped\n\n# Druggability assessment\necho \"Druggability Score: 0.85 (excellent target)\"\necho \"Binding pocket volume: 850 Ų\"\necho \"Hydrophobic surface area: 65%\"\necho \"Predicted binding affinity: Kd < 10 nM achievable\"\n```\n\n## 3. Lead Compound Discovery\n\n### High-Throughput Screening (HTS):\n```python\n# Virtual screening của compound libraries\nfrom rdkit import Chem\nfrom rdkit.Chem import Descriptors, Lipinski\nimport random\n\n# Compound library analysis\nclass CompoundLibrary:\n    def __init__(self, size=100000):\n        self.size = size\n        self.compounds = self.generate_virtual_library()\n    \n    def generate_virtual_library(self):\n        \"\"\"Generate virtual compound library với drug-like properties\"\"\"\n        compounds = []\n        for i trong range(self.size):\n            # Simulated compound properties\n            mol_weight = random.uniform(150, 500)\n            logp = random.uniform(-2, 5)\n            hbd = random.randint(0, 5)\n            hba = random.randint(0, 10)\n            tpsa = random.uniform(20, 140)\n            \n            # Lipinski's Rule of Five screening\n            lipinski_pass = (\n                mol_weight <= 500 and\n                logp <= 5 and\n                hbd <= 5 and\n                hba <= 10\n            )\n            \n            compounds.append({\n                'id': f'COMP_{i:06d}',\n                'mw': mol_weight,\n                'logp': logp,\n                'hbd': hbd,\n                'hba': hba,\n                'tpsa': tpsa,\n                'lipinski_pass': lipinski_pass\n            })\n        \n        return compounds\n    \n    def virtual_screening(self, binding_threshold=-8.0):\n        \"\"\"Simulate molecular docking screening\"\"\"\n        hits = []\n        for compound trong self.compounds:\n            if compound['lipinski_pass']:\n                # Simulated binding score\n                binding_score = random.uniform(-12, -4)\n                if binding_score <= binding_threshold:\n                    compound['binding_score'] = binding_score\n                    hits.append(compound)\n        \n        # Sort by binding affinity\n        hits.sort(key=lambda x: x['binding_score'])\n        return hits[:1000]  # Top 1000 hits\n\n# Execute screening\nlibrary = CompoundLibrary()\nhits = library.virtual_screening()\n\nprint(f\"Library size: {library.size:,} compounds\")\nprint(f\"Drug-like compounds: {sum(1 for c trong library.compounds if c['lipinski_pass']):,}\")\nprint(f\"Virtual hits: {len(hits)} compounds\")\nprint(f\"Hit rate: {len(hits)/library.size*100:.3f}%\")\n\n# Top 5 compounds cho further development\nprint(\"\\nTop Lead Compounds:\")\nfor i, hit trong enumerate(hits[:5]):\n    print(f\"{i+1}. {hit['id']}: Binding = {hit['binding_score']:.2f} kcal/mol\")\n```\n\n### Lead Optimization Campaign:\n```bash\n# Medicinal chemistry optimization\n# Structure-Activity Relationship (SAR) development\n\n# Lead compound: COMP_007234\n# Initial properties:\n# - Binding affinity: Kd = 45 nM\n# - Selectivity: 10-fold vs PD-1\n# - Cell permeability: Low\n# - Metabolic stability: Poor\n\n# Optimization strategy:\necho \"Round 1: Improve binding affinity\"\necho \"- Modifications: Add hydrogen bond donors\"\necho \"- Result: Kd improved to 8 nM\"\n\necho \"\\nRound 2: Enhance selectivity\"\necho \"- Modifications: Optimize hydrophobic interactions\"\necho \"- Result: 100-fold selectivity vs PD-1\"\n\necho \"\\nRound 3: Improve ADMET properties\"\necho \"- Modifications: Reduce molecular weight, add metabolic blocking groups\"\necho \"- Result: Good oral bioavailability, extended half-life\"\n\n# Final optimized compound: LAG3i-001\necho \"\\nFinal Lead Compound (LAG3i-001):\"\necho \"- Binding affinity: Kd = 2.5 nM\"\necho \"- Selectivity: >500-fold\"\necho \"- Oral bioavailability: 65%\"\necho \"- Half-life: 8 hours\"\necho \"- Safety margin: >100-fold\"\n```\n\n## 4. Preclinical Development\n\n### In Vitro Pharmacology:\n```python\n# Cell-based assays cho mechanism validation\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy.optimize import curve_fit\n\ndef dose_response_curve(concentration, top, bottom, ic50, hill_slope):\n    \"\"\"Four-parameter logistic function\"\"\"\n    return bottom + (top - bottom) / (1 + (concentration / ic50) ** hill_slope)\n\n# T cell activation assay\nconcentrations = np.logspace(-11, -6, 10)  # 0.1 pM to 1 μM\n\n# Simulated data: LAG3i-001 effect on T cell proliferation\nt_cell_proliferation = np.array([10, 12, 18, 28, 48, 72, 85, 92, 95, 95])\n\n# Fit dose-response curve\npopt, pcov = curve_fit(dose_response_curve, concentrations, t_cell_proliferation,\n                       p0=[100, 10, 1e-9, 1])\n\ntop, bottom, ic50, hill_slope = popt\nprint(f\"EC50 cho T cell activation: {ic50*1e9:.2f} nM\")\nprint(f\"Maximum effect: {top:.1f}% increase trong proliferation\")\n\n# Cytokine release assay\ncytokines = ['IFN-γ', 'IL-2', 'TNF-α', 'Granzyme B']\nincrease_fold = [4.2, 3.8, 2.9, 5.1]\n\nprint(\"\\nCytokine Release (fold increase):\")\nfor cytokine, fold trong zip(cytokines, increase_fold):\n    print(f\"- {cytokine}: {fold}x increase\")\n```\n\n### In Vivo Efficacy Studies:\n```bash\n# Mouse tumor models\necho \"Syngeneic Tumor Models:\"\necho \"1. B16F10 melanoma model\"\necho \"   - Tumor volume reduction: 75%\"\necho \"   - Survival extension: 40 days vs 18 days control\"\necho \"   - Complete responses: 30% of animals\"\n\necho \"\\n2. LLC lung cancer model\"\necho \"   - Tumor growth inhibition: 68%\"\necho \"   - Metastasis reduction: 85%\"\necho \"   - Immune infiltration: 3x increase trong CD8+ T cells\"\n\necho \"\\n3. Combination với PD-1 inhibitor\"\necho \"   - Synergistic effect observed\"\necho \"   - Complete responses: 60% of animals\"\necho \"   - No additional toxicity\"\n\n# Toxicology studies\necho \"\\nToxicology Profile:\"\necho \"- NOAEL (No Observed Adverse Effect Level): 100 mg/kg\"\necho \"- Maximum tolerated dose: >300 mg/kg\"\necho \"- Target organs: None identified\"\necho \"- Genotoxicity: Negative\"\necho \"- Reproductive toxicity: No effects observed\"\n```\n\n### Pharmacokinetics & ADMET:\n```python\n# PK/PD modeling\nimport numpy as np\nfrom scipy.integrate import odeint\nimport matplotlib.pyplot as plt\n\ndef pk_model(y, t, ka, ke, cl, v):\n    \"\"\"One-compartment PK model với absorption\"\"\"\n    depot, central = y\n    \n    ddepot_dt = -ka * depot\n    dcentral_dt = ka * depot - ke * central\n    \n    return [ddepot_dt, dcentral_dt]\n\n# PK parameters cho LAG3i-001\nka = 0.5   # absorption rate (1/h)\nke = 0.087  # elimination rate (1/h)\ncl = 0.8   # clearance (L/h/kg)\nv = 8.0    # volume of distribution (L/kg)\n\n# Simulate oral dosing\ndose = 50  # mg/kg\nt = np.linspace(0, 24, 100)\ny0 = [dose, 0]\n\nsol = odeint(pk_model, y0, t, args=(ka, ke, cl, v))\nplasma_conc = sol[:, 1] / v\n\n# Calculate PK parameters\nauc = np.trapz(plasma_conc, t)\ncmax = np.max(plasma_conc)\ntmax = t[np.argmax(plasma_conc)]\nhalf_life = np.log(2) / ke\n\nprint(f\"Pharmacokinetic Parameters:\")\nprint(f\"- Cmax: {cmax:.2f} μg/mL\")\nprint(f\"- Tmax: {tmax:.1f} hours\")\nprint(f\"- AUC: {auc:.1f} μg⋅h/mL\")\nprint(f\"- Half-life: {half_life:.1f} hours\")\nprint(f\"- Bioavailability: 65%\")\n```\n\n## 5. Clinical Development Strategy\n\n### Phase I Clinical Trial Design:\n```python\n# Dose escalation study design\nclass PhaseITrial:\n    def __init__(self):\n        self.dose_levels = [5, 10, 20, 40, 80, 160, 320]  # mg\n        self.cohort_size = 3\n        self.max_patients = 42\n        self.dlt_threshold = 0.33  # Dose-limiting toxicity threshold\n    \n    def three_plus_three_design(self):\n        \"\"\"Classical 3+3 dose escalation\"\"\"\n        results = []\n        for dose trong self.dose_levels:\n            # Simulated DLT rates (increasing với dose)\n            dlt_rate = min(0.6, dose / 1000 + 0.05)\n            \n            # Simulate cohort results\n            dlts = np.random.binomial(self.cohort_size, dlt_rate)\n            \n            results.append({\n                'dose': dose,\n                'patients': self.cohort_size,\n                'dlts': dlts,\n                'dlt_rate': dlts / self.cohort_size\n            })\n            \n            # Stopping rules\n            if dlts >= 2:  # Stop escalation\n                results[-1]['decision'] = 'MTD exceeded'\n                break\n            elif dlts == 1:  # Expand cohort\n                results[-1]['patients'] = 6\n                results[-1]['decision'] = 'Expand cohort'\n            else:\n                results[-1]['decision'] = 'Escalate'\n        \n        return results\n    \n    def generate_trial_report(self):\n        results = self.three_plus_three_design()\n        \n        print(\"Phase I Dose Escalation Results:\")\n        print(\"Dose (mg) | Patients | DLTs | Rate | Decision\")\n        print(\"-\" * 50)\n        \n        for result trong results:\n            print(f\"{result['dose']:8d} | {result['patients']:8d} | {result['dlts']:4d} | {result['dlt_rate']:4.2f} | {result['decision']}\")\n        \n        # Recommended Phase II dose\n        safe_doses = [r cho r trong results if r['dlt_rate'] < self.dlt_threshold]\n        if safe_doses:\n            rp2d = max(safe_doses, key=lambda x: x['dose'])\n            print(f\"\\nRecommended Phase II Dose: {rp2d['dose']} mg\")\n        \n        return results\n\n# Execute trial simulation\ntrial = PhaseITrial()\nresults = trial.generate_trial_report()\n```\n\n### Phase II Trial Design:\n```bash\n# Multi-arm efficacy study\necho \"Phase II Trial Design: LAG3i-001 trong Advanced Melanoma\"\necho \"Primary Endpoint: Overall Response Rate (ORR)\"\necho \"Secondary Endpoints: PFS, OS, Safety, Biomarkers\"\n\necho \"\\nStudy Arms:\"\necho \"Arm A: LAG3i-001 monotherapy (n=40)\"\necho \"Arm B: LAG3i-001 + Anti-PD-1 (n=40)\"\necho \"Arm C: Anti-PD-1 monotherapy (n=40) [control]\"\n\necho \"\\nInclusion Criteria:\"\necho \"- Advanced melanoma, progressive disease\"\necho \"- ECOG performance status 0-1\"\necho \"- Adequate organ function\"\necho \"- Prior therapy allowed (washout required)\"\n\necho \"\\nStatistical Plan:\"\necho \"- Power: 80% to detect 20% improvement trong ORR\"\necho \"- Alpha: 0.05 (two-sided)\"\necho \"- Interim analysis: 50% enrollment\"\necho \"- Futility boundary: <10% ORR trong monotherapy arm\"\n\necho \"\\nBiomarker Strategy:\"\necho \"- LAG-3 expression bằng IHC\"\necho \"- PD-L1 expression\"\necho \"- Tumor mutational burden\"\necho \"- Immune gene signatures\"\necho \"- Circulating tumor DNA\"\n```\n\n## 6. Regulatory Strategy & Development Timeline\n\n### FDA Interaction Plan:\n```bash\necho \"Regulatory Milestones:\"\necho \"\\nPre-IND Meeting (Month 0):\"\necho \"- Discuss nonclinical data package\"\necho \"- Align on Phase I trial design\"\necho \"- CMC requirements review\"\n\necho \"\\nIND Submission (Month 3):\"\necho \"- Complete nonclinical package\"\necho \"- Phase I protocol và investigator brochure\"\necho \"- CMC data (drug substance và product)\"\necho \"- 30-day FDA review period\"\n\necho \"\\nEOP2 Meeting (Month 24):\"\necho \"- Discuss Phase II results\"\necho \"- Align on Phase III trial design\"\necho \"- Accelerated approval pathway discussion\"\n\necho \"\\nBLA Submission (Month 60):\"\necho \"- Complete efficacy và safety data\"\necho \"- Risk-benefit assessment\"\necho \"- Post-market commitments\"\necho \"- FDA review: 6-12 months\"\n\necho \"\\nTotal Development Timeline: 6-8 years\"\necho \"Total Investment: $500M - 1B\"\n```\n\n### Intellectual Property Strategy:\n```bash\necho \"Patent Portfolio Development:\"\necho \"\\n1. Composition of Matter (Primary):\"\necho \"   - Core LAG3i-001 structure\"\necho \"   - Pharmaceutical compositions\"\necho \"   - Expiry: 2044 (20-year term)\"\n\necho \"\\n2. Method of Use Patents:\"\necho \"   - LAG-3 inhibition cho cancer treatment\"\necho \"   - Combination với checkpoint inhibitors\"\necho \"   - Biomarker-guided therapy\"\n\necho \"\\n3. Formulation Patents:\"\necho \"   - Oral tablet formulation\"\necho \"   - Extended-release formulations\"\necho \"   - Combination products\"\n\necho \"\\n4. International Filing:\"\necho \"   - PCT application filed\"\necho \"   - National phase: US, EU, Japan, China\"\necho \"   - Patent prosecution: 3-5 years\"\n\necho \"\\nFreedom to Operate:\"\necho \"   - No blocking patents identified\"\necho \"   - Clear development pathway\"\necho \"   - Competitive landscape monitored\"\n```\n\n## 7. Commercial Strategy & Market Analysis\n\n### Market Assessment:\n```python\n# Market sizing analysis\nclass MarketAnalysis:\n    def __init__(self):\n        self.cancer_incidence = {\n            'melanoma': 325000,\n            'lung_cancer': 2200000,\n            'breast_cancer': 2300000,\n            'colon_cancer': 1900000\n        }\n        \n        self.lag3_expression_rates = {\n            'melanoma': 0.68,\n            'lung_cancer': 0.52,\n            'breast_cancer': 0.34,\n            'colon_cancer': 0.41\n        }\n        \n        self.treatment_cost_annual = 150000  # USD\n        self.market_penetration = 0.15  # 15% peak market share\n    \n    def calculate_addressable_market(self):\n        total_patients = 0\n        for cancer_type, incidence trong self.cancer_incidence.items():\n            lag3_positive = incidence * self.lag3_expression_rates[cancer_type]\n            total_patients += lag3_positive\n        \n        total_market = total_patients * self.treatment_cost_annual\n        addressable_market = total_market * self.market_penetration\n        \n        return {\n            'total_patients': int(total_patients),\n            'total_market': total_market / 1e9,  # Billions\n            'addressable_market': addressable_market / 1e9\n        }\n    \n    def revenue_projection(self, years=10):\n        base_market = self.calculate_addressable_market()['addressable_market']\n        \n        # Market growth và penetration over time\n        revenues = []\n        for year trong range(1, years + 1):\n            if year <= 3:\n                penetration = 0.02 * year  # Slow initial uptake\n            elif year <= 6:\n                penetration = 0.06 + 0.03 * (year - 3)  # Growth phase\n            else:\n                penetration = 0.15  # Mature market\n            \n            market_growth = 1.05 ** year  # 5% annual growth\n            annual_revenue = base_market * penetration * market_growth\n            revenues.append(annual_revenue)\n        \n        return revenues\n\n# Execute market analysis\nmarket = MarketAnalysis()\nmarket_data = market.calculate_addressable_market()\nrevenues = market.revenue_projection()\n\nprint(f\"Market Analysis - LAG3i-001:\")\nprint(f\"LAG-3 positive patients: {market_data['total_patients']:,}\")\nprint(f\"Total addressable market: ${market_data['total_market']:.1f}B\")\nprint(f\"Peak addressable market: ${market_data['addressable_market']:.1f}B\")\n\nprint(f\"\\nRevenue Projections:\")\nfor year, revenue trong enumerate(revenues[:5], 1):\n    print(f\"Year {year}: ${revenue:.2f}B\")\n\nprint(f\"\\nPeak annual revenue (Year 7+): ${max(revenues):.2f}B\")\nprint(f\"NPV (10 years, 10% discount): ${sum(rev/(1.1**i) for i, rev trong enumerate(revenues, 1)):.2f}B\")\n```\n\n### Competitive Analysis:\n```bash\necho \"Competitive Landscape:\"\necho \"\\nDirect Competitors:\"\necho \"1. Relatlimab (Bristol Myers Squibb)\"\necho \"   - LAG-3 antibody\"\necho \"   - Approved trong combination với nivolumab\"\necho \"   - Market position: First-mover advantage\"\n\necho \"\\n2. Favezelimab (Merck)\"\necho \"   - LAG-3 antibody trong development\"\necho \"   - Multiple combination studies\"\necho \"   - Timeline: 2-3 years behind\"\n\necho \"\\nCompetitive Advantages:\"\necho \"- Oral administration (vs IV antibodies)\"\necho \"- Lower cost of goods\"\necho \"- Combination-friendly profile\"\necho \"- Biomarker-guided approach\"\n\necho \"\\nKey Differentiation:\"\necho \"- Patient convenience (oral dosing)\"\necho \"- Cost-effectiveness\"\necho \"- Broader patient accessibility\"\necho \"- Novel mechanism insights\"\n```\n\n## 8. Risk Assessment & Mitigation\n\n### Development Risks:\n```python\n# Risk analysis framework\nrisks = [\n    {\n        'category': 'Technical',\n        'risk': 'Insufficient efficacy trong Phase II',\n        'probability': 0.35,\n        'impact': 0.9,\n        'mitigation': 'Biomarker-enriched patient selection, combination strategies'\n    },\n    {\n        'category': 'Regulatory',\n        'risk': 'FDA requirements exceed expectations',\n        'probability': 0.25,\n        'impact': 0.6,\n        'mitigation': 'Early FDA engagement, adaptive trial designs'\n    },\n    {\n        'category': 'Commercial',\n        'risk': 'Competitive threats from antibodies',\n        'probability': 0.45,\n        'impact': 0.7,\n        'mitigation': 'Differentiation strategy, cost advantages'\n    },\n    {\n        'category': 'Manufacturing',\n        'risk': 'Scale-up challenges',\n        'probability': 0.20,\n        'impact': 0.5,\n        'mitigation': 'Early process development, multiple suppliers'\n    }\n]\n\n# Calculate risk scores\nprint(\"Risk Assessment Matrix:\")\nprint(\"Category | Risk | Prob | Impact | Score | Mitigation\")\nprint(\"-\" * 80)\n\nfor risk trong risks:\n    score = risk['probability'] * risk['impact']\n    print(f\"{risk['category']:12} | {risk['risk'][:20]:20} | {risk['probability']:4.2f} | {risk['impact']:6.2f} | {score:5.2f} | {risk['mitigation'][:25]}\")\n\n# Overall project risk\ntotal_risk = sum(r['probability'] * r['impact'] for r trong risks) / len(risks)\nprint(f\"\\nOverall Project Risk Score: {total_risk:.2f} (Moderate)\")\n```\n\n## 9. Success Metrics & Decision Gates\n\n### Development Milestones:\n```bash\necho \"Key Decision Gates:\"\necho \"\\nGate 1 - Lead Optimization (Month 12):\"\necho \"Success Criteria:\"\necho \"- Binding affinity: <5 nM\"\necho \"- Selectivity: >100-fold\"\necho \"- Oral bioavailability: >50%\"\necho \"- Safety margin: >100-fold\"\necho \"Decision: Proceed to IND-enabling studies\"\n\necho \"\\nGate 2 - Phase I Completion (Month 18):\"\necho \"Success Criteria:\"\necho \"- MTD identified\"\necho \"- Safety profile acceptable\"\necho \"- PK properties confirmed\"\necho \"- Biomarker engagement\"\necho \"Decision: Proceed to Phase II\"\n\necho \"\\nGate 3 - Phase II Interim (Month 36):\"\necho \"Success Criteria:\"\necho \"- ORR >20% trong monotherapy\"\necho \"- ORR >40% trong combination\"\necho \"- Acceptable safety profile\"\necho \"- Biomarker predictivity\"\necho \"Decision: Proceed to Phase III\"\n\necho \"\\nGate 4 - Phase III Readout (Month 60):\"\necho \"Success Criteria:\"\necho \"- Primary endpoint met (PFS)\"\necho \"- Favorable benefit-risk\"\necho \"- Regulatory approval path clear\"\necho \"- Commercial viability confirmed\"\necho \"Decision: File for approval\"\n```\n\nThis comprehensive drug discovery project demonstrates the complexity và rigor required to develop novel cancer therapeutics, from initial target identification through clinical proof-of-concept.",
        materials: [
          'Bioinformatics software packages',
          'High-throughput screening platforms',
          'Cell culture facilities',
          'Animal testing facilities',
          'Clinical trial infrastructure',
          'Regulatory submission systems'
        ],
        procedure: [
          'Identify và validate therapeutic target using genomics',
          'Screen compound libraries cho lead identification',
          'Optimize lead compounds cho drug-like properties',
          'Conduct preclinical efficacy và safety studies',
          'Design và execute clinical trials',
          'Prepare regulatory submissions cho approval'
        ],
        expectedResults: 'Novel cancer immunotherapy với demonstrated efficacy trong clinical trials, regulatory approval pathway, và commercial potential exceeding $2B annually'
      }
    ],
    realWorldApplications: [
      'Cancer immunotherapy và targeted therapy development',
      'Personalized medicine và precision diagnostic platforms',
      'Rare disease therapeutic development',
      'Vaccine development và infectious disease prevention',
      'Regenerative medicine và tissue engineering applications'
    ],
    resources: [
      {
        title: 'ClinicalTrials.gov Database',
        url: 'https://clinicaltrials.gov/',
        type: 'database',
        description: 'Comprehensive clinical trial registry với study protocols và results'
      },
      {
        title: 'FDA Drug Development Guidelines',
        url: 'https://www.fda.gov/drugs/development-approval-process-drugs',
        type: 'documentation',
        description: 'Official FDA guidance documents cho drug development và approval'
      }
    ],
    caseStudies: [
      {
        title: 'Genentech/Roche Herceptin Development: Precision Medicine Pioneer',
        organization: 'Genentech/Roche, Academic Medical Centers',
        problem: 'HER2-positive breast cancer patients had aggressive disease với poor prognosis, limited treatment options beyond chemotherapy. 20-25% của breast cancers overexpress HER2 protein, driving tumor growth và metastasis.',
        biotechSolution: 'Developed trastuzumab (Herceptin), first targeted therapy cho HER2-positive breast cancer. Used monoclonal antibody technology targeting HER2 receptor, combined với companion diagnostic test để identify appropriate patients.',
        impact: 'Transformed HER2+ breast cancer from fatal disease to manageable condition. Improved 10-year survival từ 25% to 80%+. Generated $7B+ annual revenue at peak. Established precision medicine paradigm với biomarker-driven therapy.',
        innovations: [
          'First successful targeted cancer therapy',
          'Companion diagnostic development model',
          'Biomarker-stratified clinical trial design',
          'Personalized medicine commercial framework',
          'Antibody-drug conjugate platform technology'
        ]
      }
    ]
  }
];
