# Git Hands-On — Command Guide 

---

## Lab 1: Git Config, Notepad++ Integration, First Commit

```bash
# 1. Verify Git is installed
git --version

# 2. Set user identity
git config --global user.name "Piyusha Kate"
git config --global user.email "your-email@example.com"
git config --global --list

# 3. Point Git to notepad++.exe (adjust path to your actual install location)
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
git config --global -e
# This should open notepad++ — close it once verified.

# 4. Create the local repo
mkdir GitDemo && cd GitDemo
git init

ls -la
# confirms the hidden .git folder exists

# 5. Create and track a file
echo "Welcome to Git Demo" > welcome.txt
cat welcome.txt
git status


git add welcome.txt
git commit
# Notepad++ opens — write a multi-line commit message, save, close.
git status


# 6. Connect to GitLab (create "GitDemo" project on GitLab first, in the browser)
git remote add origin <YOUR_GITLAB_REPO_URL>
git pull origin master --allow-unrelated-histories
git push origin master

```

---

## Lab 2: .gitignore 

```bash
cd GitDemo

# Create files that should be ignored
mkdir log
echo "sample log entry" > log/app.log
echo "sample log entry" > debug.log

# Create .gitignore
cat > .gitignore << 'EOF'
*.log
log/
EOF

git add .gitignore
git commit -m "Add gitignore for log files and folder"

git status

# debug.log and log/ should NOT appear as untracked — proves gitignore works
```

---

## Lab 3: Branching & Merging 

```bash
cd GitDemo

# Branching
git branch GitNewBranch
git branch -a

# note the * next to your current branch

git checkout GitNewBranch
echo "content from new branch" > branch-file.txt
git add branch-file.txt
git commit -m "Add branch-file.txt on GitNewBranch"
git status


# Merging
git checkout master
git diff master GitNewBranch


# Visual diff (requires P4Merge installed and configured as difftool)
git difftool master GitNewBranch

git merge GitNewBranch
git log --oneline --graph --decorate


git branch -d GitNewBranch
git status

```

---

## Lab 4: Conflict Resolution 

```bash
cd GitDemo
git checkout master
git status

# confirm clean working tree

# Create conflicting change on a branch
git checkout -b GitWork
echo "<root><value>branch-version</value></root>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on GitWork branch"

# Create a DIFFERENT conflicting change on master
git checkout master
echo "<root><value>master-version</value></root>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on master with different content"

git log --oneline --graph --decorate --all


git diff master GitWork
git difftool master GitWork


# Merge — this WILL conflict
git merge GitWork
git status

# hello.xml shows as "both added" / unmerged

# Resolve with a 3-way merge tool
git mergetool
# P4Merge opens — pick/edit the correct final content, save, close.

git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"

# Clean up
echo "*.bak" >> .gitignore
git add .gitignore
git commit -m "Ignore backup files"

git status

git branch -d GitWork
git log --oneline --graph --decorate

```

---

## Lab 5: Cleanup & Push 

```bash
cd GitDemo
git status

# confirm clean state

git branch -a


git pull origin master

git push origin master

# then refresh the GitLab project page in browser and screenshot the commit history there too
```

