# Push Profile README to GitHub

## Step 1: Create the Repository
Go to [GitHub New Repository](https://github.com/new) and create a repository named exactly **Dheer46**. 
**Do NOT initialize it with a README, license, or gitignore.**

## Step 2: Run these commands
Once the repository is created, run these commands in your terminal (or I can run them for you if you tell me it's created):

```powershell
# Create a temporary folder for the profile
mkdir Dheer46_Profile
cp PERSONAL_README.md Dheer46_Profile/README.md
cp github_profile_banner.png Dheer46_Profile/github_profile_banner.png
cd Dheer46_Profile

# Initialize and push
git init
git add .
git commit -m "Initial profile commit"
git branch -M main
git remote add origin https://github.com/Dheer46/Dheer46.git
git push -u origin main
```

## Troubleshooting
If you get a "permission denied" error, you might need to use SSH or a Personal Access Token.
