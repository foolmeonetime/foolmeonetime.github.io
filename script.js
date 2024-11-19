const links = [
  { url: "https://www.pond0x.com/swap/solana?ref=JLAXoPJYznERccKinrUj4nGsj6cinowE5N82ekygCi14Qxh2MuZAZE44Dyds", label: "Pond Fren 1" },
  { url: "https://www.pond0x.com/swap/solana?ref=J3SPXnjkse8upQX5nmggv8sRw18eVoRLktofu2FYLpKyeZ94qUXSYHHub2EC", label: "Pond Fren 2" },
  { url: "https://www.pond0x.com/swap/solana?ref=JhXutudS6GyzkiSYMzqaktVC1ebVncjwzrgfqCDS51NLv7Yv6UWE66PELCZx", label: "Pond Fren 3" },
  { url: "https://www.pond0x.com/swap/solana?ref=PuBRurxbdKxXExGakRR46zsLsnb22yfp4V8FyncRthTWVdLZEzWiLEwekTha", label: "Pond Fren 4" },
  { url: "https://www.pond0x.com/swap/solana?ref=Ps3oBwUFJqg78Qduw2jVP4voyZLv9KwBqbhYWeoMt3EyZBkFSHt5NEFicSYu", label: "Pond Fren 5" },
  { url: "https://www.pond0x.com/swap/solana?ref=QDPKqT5MyXHPNLh1QeNcR5v4pcFQ37NyngobeyBDBgVoovH6jz9aL8gH3o12", label: "Pond Fren 6" },
  { url: "https://pond0x.com/swap/solana?ref=JfYMRqw4B3Sj88H8BTB1FUUUjdv2hJZr4hHmGsq3QSn62p2J4XLPmA8G7GCu", label: "Pond Fren 7" },
  { url: "https://www.pond0x.com/swap/solana?ref=HhRRGEXL3tm4zeG71DpxXsTqEacTn8ZTwyMVVxofKLppmQNuTVqDYUrrkaAF", label: "Pond Fren 8" },
  { url: "https://www.pond0x.com/swap/solana?ref=NvmaEpBytGVkgKyqueMVbeFJMKHmZ9ma9ua2oWY22bHtL9um8uqq62zaLfBu", label: "Pond Fren 9" },
  { url: "https://www.pond0x.com/swap/solana?ref=JhkNt6huN5WvWhQAEZ5Zy9CFvdUZkSsADGNcvBRXB5J7FDMm3FBZen8Y8Sth", label: "Pond Fren 10" },
  { url: "https://www.pond0x.com/swap/solana?ref=K1tBUTLRk5Ndkq6B3EVKEQF1WMorHyRxDUJBoSnBKUU4GYBCtyQQJnoAPbF1", label: "Pond Fren 11" },
  { url: "https://www.pond0x.com/swap/solana?ref=NaD2WWn4Jy8tzGQn9YAFN6fpBjqTEgoZfAeAvEm2z8ydUwvgqfa5ghy4fEfc", label: "Pond Fren 12" },
  { url: "https://www.pond0x.com/swap/solana?ref=PW3fPSZjfCEAomRQXW6mWrxLupgoot2EB566TukpmHLNySSMFD46NLbZg2Vo", label: "Pond Fren 13" },
  { url: "https://www.pond0x.com/swap/solana?ref=QUQZgXBXSGNGiqNqTSBEuZE1vd8pVPp4naR47HkxrAHGhSka5T1ztZEN1UD4", label: "Pond Fren 14" },
  { url: "https://www.pond0x.com/swap/solana?ref=Kbu5XTijJxiUivs8zX9KbSRSpp89Pzd3cfNtWbv9P5tfEceAqvevTqGqmH4R", label: "Pond Fren 15" },
  { url: "https://www.pond0x.com/swap/solana?ref=8KpQejPLHefZPh64Aj4YiMACE8Y5EwJK6dxgXWQpRyHHkiK2jQAVAvdF3QB", label: "Pond Fren 16" },
  { url: "https://www.pond0x.com/swap/solana?ref=KfWxBM1dew4Vi3KC19Hdu3rkzDBWdg3o5wKfmTu6qAPSZrm3NxFY5bNSdqSH", label: "Pond Fren 17" },
  { url: "https://pond0x.com/swap/solana?ref=KbYEecdVXkrXx19jvtFDKNkpikK9ztsvSJZGL2sVXmpaaKSdM6RrWWtenEML", label: "Pond Fren 18" },
  { url: "https://pond0x.com/swap/solana?ref=QDNk5TQjywRLqWsLAnHYuGTQnpnorm2XTTXbvCcp5cNc8PDQGnm5FZjMUeKz", label: "Pond Fren 19" },
  { url: "https://www.pond0x.com/swap/solana?ref=HecwkWpL7J7GQVBn2SooULWZJ1WK88HsRZMgFWWv4jdDY2a8T3jVMq6VkgQq", label: "Pond Fren 20" },
  { url: "https://pond0x.com/swap/solana?ref=QAjZffNGKxyvAdQGzBCvEMD4FbAVcCuUYssPBv3NCpz4194aoXTVHvpbhpfM", label: "Pond Fren 21" },
  { url: "https://pond0x.com/swap/solana?ref=JfgjV6Ft497sNC9pwp9R5mK3rCdAak8pzC3USynBEnoLBKHdjiDpbWDpd39J", label: "Pond Fren 22" },
  { url: "https://www.pond0x.com/swap/solana?ref=PDKko7WfGLBX5nXGvJZZJAhNFbT1ZJTfc24wRJ9YYEwGvqdLbrm25GciHU8f", label: "Pond Fren 23" },
  { url: "https://www.pond0x.com/swap/solana?ref=NbF6F1g2DLxjf4yZycx4q2qqaeZzMgigzXuehW3XJVG3vyj7TRYgY2ad39QX", label: "Pond Fren 24" },
  { url: "https://www.pond0x.com/swap/solana?ref=JMsUB7FycfdBVpAbnkezP51BgAYEbfJKmPC3W9PfEewE1uR1DJ5469tEYp8T", label: "Pond Fren 25" },
  { url: "https://www.pond0x.com/swap/solana?ref=8gzyqrAvzZPq61JXL7Rj5JHP259eiNy4ussU3SXfDbbFANebYAqczanGivA", label: "Pond Fren 26" },
  { url: "https://www.pond0x.com/swap/solana?ref=NEq1TJRJ9VHNpjpzVv5aXTamqoekRQM92hCCMaPj1VuEbrQ1oc5zwVtUbK5W", label: "Pond Fren 27" },
  { url: "https://www.pond0x.com/swap/solana?ref=HN3astr1XrQQcwvp2TnoTScZNEQ5jtCKSqLfU5pz3Hw9X6i9LrqUWZNyxa9C", label: "Pond Fren 28" },
  { url: "https://www.pond0x.com/swap/solana?ref=JhXpwc9Vtr2GyqJaY2DQwewVM25QQbwP4HzfcJXzcYDtvsWJQcupHpwbhbje", label: "Pond Fren 29" },
  { url: "https://www.pond0x.com/swap/solana?ref=HQky2dpyJEbTnVJYm33yRuWKUS9ywS5L5vMAe2F5TG892N88vGgKnACiGKZ3", label: "Pond Fren 30" },
  { url: "https://pond0x.com/swap/solana?ref=JzPw3WQmuiuAoiVyot32NKm92EUJ11RdHmJgrqjqiFxDas8e63KzqwGz5si4", label: "Pond Fren 31" },
  { url: "https://www.pond0x.com/swap/solana?ref=R8RXn3CF5wHYRU61shcNu7FuiHDPiCgmBaTTYLt9czoprKJVQ73wsV2jaoC4", label: "Pond Fren 32" },
  { url: "https://pond0x.com/swap/solana?ref=Jfd3Sb4swYvct8pxobGNXEKuofuDVUm53m9a34F57oC8RoHaVvfxdLYiswFq", label: "Pond Fren 33" },
  { url: "https://www.pond0x.com/swap/solana?ref=JL2qcak9yCA9rotuaE3ZuRENTS5pcK1SQJw1fxBPjsWkXkiWJErNzVqEDJHe", label: "Pond Fren 34" },
  { url: "https://www.pond0x.com/swap/solana?ref=R9JrUVo9giTN6LDxcbfbJz5QCKWsPiBnTngrSUFXhTZYJy5Yiy5Voiog8hnX", label: "Pond Fren 35" },
  { url: "https://www.pond0x.com/swap/solana?ref=JKj6mpPTwe7NPcXpBAZL9qykPursz5emQ6Z3S5pkL5D86WLxax1NMjipMiL1", label: "Pond Fren 36" },
  { url: "https://www.pond0x.com/swap/solana?ref=HjFrAPg4Xr9oo7RJKSE1JGkL8M7rtywFMqLFAYdVEZmQQxbpzB5VnEf44RJQ", label: "Pond Fren 37" },
  { url: "https://www.pond0x.com/swap/solana?ref=QVekUVJjxS7GvspNjkDK1TiR18ZSgPqA22N8hAzWvPPAKKr6PrTH6gTyfMsu", label: "Pond Fren 38" },
  { url: "https://www.pond0x.com/swap/solana?ref=R8RfdWEY8xQJNzKMhnvNh9F81gyPqkkYbjvycmbSdX46oP4W51csUqN2TuZR", label: "Pond Fren 39" },
  { url: "https://www.pond0x.com/swap/solana?ref=R8VGhSJEjQ1DJYXd8HxpMHKBZDDMTheAisL8XHPFVjWuDux6yK1NnPe165zE", label: "Pond Fren 40" },
  { url: "https://www.pond0x.com/swap/solana?ref=Nu4GkDXCdQaCSwypGYUxPcWoKqrKqeuEvDXruvoG6oPdZkfqy5vRa7vDyVHd", label: "Pond Fren 41" },
  { url: "https://www.pond0x.com/swap/solana?ref=KM71QsrBSxzFzVVoSfzKV9deMS1PQHo5JJbZmxob987Su7XKFHam37cvfEue", label: "Pond Fren 42" },
  { url: "https://www.pond0x.com/swap/solana?ref=NXLy9XSsnfjuGrc84sqQ5Xq1ciFCbgAFnfo7wN9P87f32wgtY4P2APi9iqz6", label: "Pond Fren 43" },
  { url: "https://www.pond0x.com/swap/solana?ref=NcZacWiKSTaq2aTdek1CwKxPLYMbx4SmDDgYZtnqZMoMFyuafT8BpRR3qoDR", label: "Pond Fren 44" },
  { url: "https://www.pond0x.com/swap/solana?ref=PVv8mwNuB6a3W3EJzwqJM6NB99q6kkkn2UNnenVQgy9kjKVTADaQW32HFgcp", label: "Pond Fren 45" },
  { url: "https://www.pond0x.com/swap/solana?ref=Jd2dv3qVRzuLZFtLat2HRrzmwmVa7Phb57LfJVd64r4jwXPhuVSUCCbNqqvq", label: "Pond Fren 46" },
  { url: "https://www.pond0x.com/swap/solana?ref=NuntAjwJtxxege1iCKppXtAdPx4X9eWBLTJijbffpePiJz9QpwJEWgAeLUsc", label: "Pond Fren 47" },
  { url: "https://www.pond0x.com/swap/solana?ref=6vm8jtAbqzVDozNDpEot4UoBByJdzw2bqGNG2WQMnuzitRGTTrVvgRNLtix", label: "Pond Fren 48" },
  { url: "https://www.pond0x.com/swap/solana?ref=PaufYJzVBfBPQDA1RRUAU46g8PXn29HJLJratXyQXQFsVcGBtTEx4cNoY5Wz", label: "Pond Fren 49" },
  { url: "https://www.pond0x.com/swap/solana?ref=QEGu1H6LWH5GKGugHpjFKL4433fHaucLJYQX7tC9jK8PzGtXhpU49iTGrkwB", label: "Pond Fren 50" },
  { url: "https://www.pond0x.com/swap/solana?ref=KJNRdKEL3yJZHRWPJXK4VNFcwhZpCTYqGD8m4a9DjexkQnw3Lr6cJfoksAud", label: "Pond Fren 51" },
  { url: "https://www.pond0x.com/swap/solana?ref=https://www.pond0x.com/swap/solana?ref=QDgQC6UnQLkAorx1m421Br4MBo7sCB1F3KaVFWrArH3SRJUgPBnoFajKp7os", label: "Pond Fren 52" },
  { url: "https://www.pond0x.com/swap/solana?ref=HeXft49KLeYfLQhu94Je8XVtEa7biRR3eboWBgq78Uv6VBuqKvTkt8HXwwrQ", label: "Pond Fren 53" },
  { url: "https://www.pond0x.com/swap/solana?ref=KMqyoh4kqhQ1pPEC14RoFdCGwfmkr1HowACM65AMfmdmECDismx1BRY74gD4", label: "Pond Fren 54" },
  { url: "https://pond0x.com/swap/solana?ref=Jfd3Sb4swYvct8pxobGNXEKuofuDVUm53m9a34F57oC8RoHaVvfxdLYiswFq", label: "Pond Fren 55" },
  { url: "https://www.pond0x.com/swap/solana?ref=HyYzpyynDeYeA8DnNJu7SMyPoE8bPSJ9DmVjfuhmLWYXPYuFmHW72yy8v7Ug", label: "Pond Fren 56" },
  { url: "https://www.pond0x.com/swap/solana?ref=KKhdXvEK157C9TihipASjkAVvsVQHNn57FBLcNkLpJWzMJE1kUYosdLGDDTD", label: "Pond Fren 57" },
  { url: "https://www.pond0x.com/swap/solana?ref=R9WkNzJcJR1pCtHzZyj4fQmbh21Z3fagRkTB91t9kQf9BXKkVq8uM93CdkWB", label: "Pond Fren 58" },
  { url: "https://www.pond0x.com/swap/solana?ref=J16ULYWGnTiYaL8n4dJtYmhZf6cqHns8RM1nij1zU1TTpYYKQJ3A1xpfS4oS", label: "Pond Fren 59" },
  { url: "https://www.pond0x.com/swap/solana?ref=6dbsCj5Pe1iRrcmYCiw86BR36PtRqioAVdCadJeNSWNn9DMsFT8hyDN81Ln", label: "Pond Fren 60" },
  { url: "https://www.pond0x.com/swap/solana?ref=Jzn3VG885uDtiZSbgj95j766a7L5kRBjQaehqjUcoBMGEKqVvmoQ4F9H98hj", label: "Pond Fren 61" },
  { url: "https://www.pond0x.com/swap/solana?ref=JyoSyZAwLVyyQ7TBD7BynyjoLUYKhvFhUqJigtXS4F8wKA8An1TkjeEqjJzm", label: "Pond Fren 62" },
  { url: "https://www.pond0x.com/swap/solana?ref=KLJ5LHQsSkC3EKqNiVrphETFrjKcRxHZq2RwEkD3bJnDPv1psVU799R6sNQf", label: "Pond Fren 63" },
  { url: "https://www.pond0x.com/swap/solana?ref=Jzn3VG885uDtiZSbgj95j766a7L5kRBjQaehqjUcoBMGEKqVvmoQ4F9H98hj", label: "Pond Fren 64" },
  { url: "https://pond0x.com/swap/solana?ref=QDNk5TQjywRLqWsLAnHYuGTQnpnorm2XTTXbvCcp5cNc8PDQGnm5FZjMUeKz", label: "Pond Fren 65" },
  { url: "https://www.pond0x.com/swap/solana?ref=QVaURx5DT8iWrNzgHrLNid43Htz4brv8tjP14GADhDNyPf1no6frqFYe2kXV", label: "Pond Fren 66" },
  { url: "https://www.pond0x.com/swap/solana?ref=7eR6MKvXebdCnNs4uSrJk9r6UYyVUVwVJNAxewNoNWqyJmZYcNBaPLKLP74", label: "Pond Fren 67" },
  { url: "https://www.pond0x.com/swap/solana?ref=JJFXecJnBCv7ux8us9Cqq8vPGgJsQioM6ZhzGkxp4mT2PUbQU5x7XKpnejXe", label: "Pond Fren 68" },
  { url: "https://www.pond0x.com/swap/solana?ref=NbFNpGYjoePzxPMBcRZu9Gqgj9QcXKcZXDj7JsijDD6JTXwFoq2Arox44hHa", label: "Pond Fren 69" },
  { url: "https://t.co/HnhmIhnSPO", label: "Pond Fren 70" },
  { url: "https://t.co/XraigDwZJp", label: "Pond Fren 71" },
  { url: "https://t.co/RFV5Z0fSxV", label: "Pond Fren 72" },
  { url: "https://t.co/Pg0ZTqkmuZ", label: "Pond Fren 73" },
  { url: "https://t.co/Zi5G2RUq5E", label: "Pond Fren 74" },
  { url: "https://t.co/JQj13dMNqa", label: "Pond Fren 75" },
  { url: "https://t.co/Z5FFsnwn8F", label: "Pond Fren 76" },
  { url: "https://t.co/5Vw5wzRSzp", label: "Pond Fren 77" },
  { url: "https://t.co/Tx3hW5RULb", label: "Pond Fren 78" },
  { url: "https://t.co/y4KvlzQuPC", label: "Pond Fren 79" },
  { url: "https://t.co/Lr7pFuhW9I", label: "Pond Fren 80" },
  { url: "https://t.co/5OKiJ8WvD9", label: "Pond Fren 81" },
  { url: "https://t.co/UCIJRE0qOp", label: "Pond Fren 82" },
  { url: "https://t.co/s7C2pD9My7", label: "Pond Fren 83" },
  { url: "https://t.co/TyKp9yH4Sx", label: "Pond Fren 84" },
  { url: "https://t.co/JkIZJgAmsC", label: "Pond Fren 85" },
  { url: "https://t.co/M3ZgIbSEok", label: "Pond Fren 86" },
  { url: "https://t.co/wvD93hFw8A", label: "Pond Fren 87" },
  { url: "https://t.co/uubiNQUEii", label: "Pond Fren 88" },
  { url: "https://t.co/bq06IIneh1", label: "Pond Fren 89" },
  { url: "https://t.co/162HtTQsBa", label: "Pond Fren 90" },
  { url: "https://t.co/UBfgNisoo9", label: "Pond Fren 91" },
  { url: "https://t.co/U6PAOpUPVx", label: "Pond Fren 92" },
  { url: "https://t.co/kygZ7OiAcTn", label: "Pond Fren 93" },
  { url: "https://t.co/FvUryvCeHG", label: "Pond Fren 94" },
  { url: "https://t.co/3hWWwBNhSI", label: "Pond Fren 95" },
  { url: "https://t.co/EGVicJ1yfG", label: "Pond Fren 96" },
  { url: "https://t.co/WmhcluQRtj", label: "Pond Fren 97" },
  { url: "https://t.co/9YxL87YI7y", label: "Pond Fren 98" },
  { url: "https://t.co/A1KvNSeMd0", label: "Pond Fren 99" },
  { url: "https://t.co/ZxNy126Bo0", label: "Pond Fren 100" },
  { url: "https://t.co/Ow3khj00ew", label: "Pond Fren 101" },
  { url: "https://t.co/EC7KtEKMFQ", label: "Pond Fren 102" },
  { url: "https://t.co/oIDfYkSSR2", label: "Pond Fren 103" },
  { url: "https://t.co/HMqvEsQ4ZI", label: "Pond Fren 104" },
  { url: "https://t.co/fRnL5EXO9Z", label: "Pond Fren 105" },
  { url: "https://t.co/IechWGKpet", label: "Pond Fren 106" },
  { url: "https://t.co/BDrCCU3r2A", label: "Pond Fren 107" },
  { url: "https://t.co/paNlzZFTQV", label: "Pond Fren 108" },
  { url: "https://t.co/uVHQjg2tiQ", label: "Pond Fren 109" },
  { url: "https://pond0x.com/swap/solana?ref=KLfc17WAJMCEuSPpZkcYFqNuPCEUDbPW9ojMmmXeaexVRYtMM4X9sDg2114p", label: "Pond Fren 110" },
  { url: "https://t.co/pnUxN0rnZ4", label: "Pond Fren 111" },
  { url: "https://t.co/GIWs0u8PFD", label: "Pond Fren 112" },
  { url: "https://t.co/BFLvuGTh7R", label: "Pond Fren 113" },
  { url: "https://t.co/9j0xRwdXdl", label: "Pond Fren 114" },
  { url: "https://www.pond0x.com/swap/solana?ref=JyNHVKLxj5oU96HYSCPc6W6Ree6VRHhnqafzqd2EUYgqeJA9NeLyTH688aqA", label: "Pond Fren 115" },
  { url: "https://t.co/lFPjo5o6qq", label: "Pond Fren 116" },
  { url: "https://t.co/NvwBvDW2IF", label: "Pond Fren 117" },
  { url: "https://t.co/Ct5iXistHX", label: "Pond Fren 118" },
  { url: "https://t.co/OZdM6UqWw6", label: "Pond Fren 119" },
  { url: "https://t.co/YRJxCxqEuk", label: "Pond Fren 120" },
  { url: "https://t.co/orNbfEkxHn", label: "Pond Fren 121" },
  { url: "https://t.co/xmk8UNrama", label: "Pond Fren 122" },
  { url: "https://t.co/1EE5XxVlXo", label: "Pond Fren 123" },
  { url: "https://t.co/wH4ywGVDGN", label: "Pond Fren 124" },
  { url: "https://t.co/lgEIgNPXnh", label: "Pond Fren 125" },
  { url: "https://t.co/BYJPAVSmRN", label: "Pond Fren 126" },
  { url: "https://t.co/wXo4XOgh1T", label: "Pond Fren 127" },
  { url: "https://t.co/eWiTpViFK3", label: "Pond Fren 128" },
  { url: "https://t.co/wxeqlDVslx", label: "Pond Fren 129" },
  { url: "https://t.co/yGQftK9nfe", label: "Pond Fren 130" },
  { url: "https://t.co/kLhXZZzNap", label: "Pond Fren 131" },
  { url: "https://t.co/zMsSkhHhe4", label: "Pond Fren 132" },
  { url: "https://t.co/rr6XGlcIB2", label: "Pond Fren 133" },
  { url: "https://t.co/MLbCimE7ck", label: "Pond Fren 134" },
  { url: "https://t.co/HFfGA9zUGs", label: "Pond Fren 135" },
  { url: "https://t.co/nBrHPX7C4F", label: "Pond Fren 136" },
  { url: "https://t.co/GzJ6cX0giz", label: "Pond Fren 137" },
  { url: "https://t.co/ecNj8IM3M5", label: "Pond Fren 138" },
  { url: "https://t.co/Q9Kie22Vti", label: "Pond Fren 139" },
  { url: "https://t.co/GWdyQYUI4k", label: "Pond Fren 140" },
  { url: "https://t.co/0xLSMmHFlZ", label: "Pond Fren 141" },
  { url: "https://t.co/bEbLptDWvk", label: "Pond Fren 142" },
  { url: "https://t.co/kIvOKgHCoS", label: "Pond Fren 143" },
  { url: "https://t.co/JLy8Nr1Pq7", label: "Pond Fren 144" },
  { url: "https://t.co/SaGUNdnvwU", label: "Pond Fren 145" },
  { url: "https://t.co/uvmwo4G6H5", label: "Pond Fren 146" },
  { url: "https://t.co/FiUbhfDb1J", label: "Pond Fren 147" },
  { url: "https://www.pond0x.com/swap/solana?ref=KKd5FSK8wtagoSvzvkicAJgqrnxQumcyX8vfCgWymVz18TGtFtMm55t6WNxd", label: "Pond Fren 148" },
  { url: "https://t.co/eyhHYxJ0ju", label: "Pond Fren 149" },
  { url: "https://t.co/KfHUVwWgnW", label: "Pond Fren 150" },
  { url: "https://t.co/EQlJG323PC", label: "Pond Fren 151" },
  { url: "https://t.co/3WnrHPUfs8", label: "Pond Fren 152" },
  { url: "https://t.co/D9qOwCUu4S", label: "Pond Fren 153" },
  { url: "https://t.co/vWC0OdvDcI", label: "Pond Fren 154" },
  { url: "https://t.co/DnM65rrKvR", label: "Pond Fren 155" },
  { url: "https://t.co/gTLkNxHbTx", label: "Pond Fren 156" },
  { url: "https://t.co/7r9KnpoZzD", label: "Pond Fren 157" },
  { url: "https://t.co/JcJRJKDo4h", label: "Pond Fren 158" },
  { url: "https://t.co/DLKg20lCSV", label: "Pond Fren 159" },
  { url: "https://t.co/TbMm1DqGAo", label: "Pond Fren 160" },
  { url: "https://t.co/XQ8OfgPSjH", label: "Pond Fren 161" },
  { url: "https://pond0x.com/swap/solana?ref=JzAuvAgJVBMQKTVFgSXaVCpGZp2RBDMW7LFwT8wJsNC8jKCiu85vLb4GqNPg", label: "Pond Fren Link 162" },
  { url: "https://t.co/4v7qhqj5k0", label: "Pond Fren 163" },
  { url: "https://t.co/yieYHTsbks", label: "Pond Fren 164" },
  { url: "https://t.co/N1SzvS7Y7x", label: "Pond Fren 165" },
  { url: "https://t.co/QreJ47TVPJ", label: "Pond Fren 166" },
  { url: "https://t.co/mQYZc5tPdK", label: "Pond Fren 167" },
  { url: "https://t.co/b6d7JnQn1R", label: "Pond Fren 168" },
  { url: "https://t.co/dAw7LNJuE9", label: "Pond Fren 169" },
  { url: "https://www.pond0x.com/swap/solana?ref=KKd5FSK8wtagoSvzvkicAJgqrnxQumcyX8vfCgWymVz18TGtFtMm55t6WNxd", label: "Pond Fren 170" },
  { url: "https://t.co/oXLaQQWR9Q", label: "Pond Fren 171" }
  ];

const generateBtn = document.getElementById("generate-btn");
const linkDisplay = document.getElementById("link-display");
const backgroundAudio = document.getElementById("background-audio");
const backgroundVideo = document.getElementById("background-video");
const pauseBtn = document.getElementById("pause-btn");

// Generate Button Click Event
generateBtn.addEventListener("click", (event) => {
    // Generate a random link
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    linkDisplay.innerHTML = `<a class="pond-fren" href="${randomLink.url}" target="_blank">${randomLink.label}</a>`;

    // Play the background video
    if (backgroundVideo.paused) {
        backgroundVideo.play().catch((error) => {
            console.error('Video autoplay failed:', error);
        });
    }

    // Create ripple effect
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${event.clientX - 50}px`;
    ripple.style.top = `${event.clientY - 50}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // Play the background audio
    if (backgroundAudio.paused) {
        backgroundAudio.play().catch((error) => {
            console.error('Audio autoplay failed:', error);
        });
    }
});

// Pause/Play Button for Audio
pauseBtn.addEventListener("click", () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        pauseBtn.textContent = "⏸️";
        pauseBtn.setAttribute("aria-label", "Pause audio");
    } else {
        backgroundAudio.pause();
        pauseBtn.textContent = "▶️";
        pauseBtn.setAttribute("aria-label", "Play audio");
    }
});
