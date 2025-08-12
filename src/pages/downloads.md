---
sidebar_position: 1
---

# Download Crabby 🦀📦

In this page, you can learn how to download **Crabby** from different operating systems and even
know how to build crabby from scratch.

## Build from source ⚙️

Step 1: Make sure to have `git` and `rust` installed

```bash
git --version
cargo --version
```

**NOTE**: To install `Rust`, just run:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Step 2: Git clone the Crabby repository

```bash
git clone https://github.com/crabby-lang/crabby.git
```

Step 3: Build it

```bash
cargo build
```

Step 4: Test and Run it

```bash
cargo run ./examples/example.crab
```

**`Additional Notes:`** Crabby is very new, so for general users, we do not recommend building Crabby from source as it is very broken for now.

## Windows 🪟

For Windows, you can use `scoop` or `choco` to install the Crabby binaries:

```bash
scoop install crabby
choco install crabby
```

## MacOS 🍎

For Mac users, you can simply use `homebrew` to download crabby:

```bash
brew install crabby
```

## Linux 🐧

For Linux users, it depends in the linux distribution you are using, but Crabby
should support a few linux distros available:

### Alpine Linux

```bash
apk add crabby
```

### Arch (EndeavourOS, Manjaro)

Using `AUR`

```bash
yay -S crabby
```

### Ubuntu / Debian

```bash
sudo apt install crabby
```

### Fedora

```bash
sudo dnf install crabby
```

### Void Linux

```bash
sudo xbps-install crabby
```

### Docker 🐳

In Docker, you can pull and run it by:

```bash
docker pull kazookilovescoding/crabby
```

And then run it

```bash
docker run kazookilovescoding/crabby
```

## Additional Notes

* An internet connection is required for initial download and potential updates
* Crabby works ONLY in the Rust nightly version
* This page might changed for the upcoming updates
