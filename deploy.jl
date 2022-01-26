#! /home/antineutrino/julia-1.7.0/bin//julia
using Franklin
#verify_links()
optimize(prepath="",minify=false)
cd("./__site")
run(`git add -A`)
run(`git commit -am "franklin commit"`)
run(`git push`)
