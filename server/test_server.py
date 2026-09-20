import io
from PIL import Image
from main import app, decompose_claim, evaluate_evidence, extract_exif

print("Testing ClaimLens server logic...")

# Test 1: Claim decomposition
claim = "This photo shows catastrophic earthquake damage hitting California today, collapsing roads and submerging transit."
decomp = decompose_claim(claim)
print(f"Decomposition: {decomp}")
assert decomp["where"] == "California"
assert decomp["when"] == "Present Day (Breaking / Immediate)"

# Test 2: Hero evidence evaluation
img = Image.new("RGB", (800, 600), color=(73, 109, 137))
exif = extract_exif(img)
eval_res = evaluate_evidence(img, claim, exif, decomp)
print(f"Verdict: {eval_res['verdict']}")
print(f"Authenticity: {eval_res['media_authenticity']}% | Claim Consistency: {eval_res['claim_consistency']}%")
assert eval_res["verdict"] == "AUTHENTIC MEDIA — MISLEADING CLAIM"

print("All server unit tests passed successfully!")
