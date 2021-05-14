const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

**babbittry/babbittry** is a ✨ _special_ ✨ repository.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...




<a href="https://github.com/anuraghazra/github-readme-stats">
  <img align="center" src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=babbittry&show_icons=true&include_all_commits=true&theme=material-palenight" alt="Anurag's github stats" />
</a>

<a href="https://github.com/anuraghazra/github-readme-stats">
  <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=babbittry&layout=compact&theme=material-palenight" />
</a>


⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'.'}



# linux卡片
[![](https://img.shields.io/badge/OS-Arch%20Linux-33aadd?style=flat-square&logo=arch-linux&logoColor=ffffff)](https://www.archlinux.org/)
# mac卡片
[![](https://img.shields.io/badge/macOS-Hackintosh-292e33?style=flat-square&logo=apple&logoColor=ffffff)](https://www.tonymacx86.com/)


# 手机设备
[![](https://img.shields.io/badge/Honor-V30-f5010c?style=flat-square&logo=huawei&logoColor=ffffff)](https://www.apple.com/)

# 程序语言
[![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://reactjs.org/)

# 游戏
![](https://img.shields.io/badge/-Nintendo%20Switch-e60012?style=flat-square&logo=nintendo%20switch&logoColor=ffffff)
[![](https://img.shields.io/badge/Steam-171a21?style=flat-square&logo=steam&logoColor=ffffff)](https://steamcommunity.com/id/antzuhl)



`
console.log(readme)
