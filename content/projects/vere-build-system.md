+++
title = "Improve Vere Build System"
start_date = "2022-11-01"
end_date = "2023-02-01"
lead = "~mastyr-bottec"
status = "Current"
+++

The build system for Vere has been the source of many headaches for years.  Experiments are being conducted to extract Vere from the monorepo into its own git repository and replace the current Nix build setup with a new one based on the Bazel build system.  If successful, these experiments could greatly reduce the amount of friction involved in Vere development, CI testing, and deployment, increasing the rate of development and releases.