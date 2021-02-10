import React, { lazy, Fragment, Suspense, useState } from 'react';
// import Form from './Form';
// import Swipe from './Swipe'
import Video from './Video';
import Download from './Download';
import VideoContent from './VideoContent';
// import TabContent from './TabContent';
import NewYear from './NewYear';
// import {Cta1,Cta2,Cta3,Cta4,Cta5,Cta6,Cta7,Cta8,} from './Cta'

import $ from 'jquery';

import { Provider } from './context/Context';

const Form = lazy(() => import('./Form'));
// const Video = lazy(() => import('./Video'));
// const Download = lazy(() => import('./Download'));
// const VideoContent = lazy(() => import('./VideoContent'));
const TabContent = lazy(() => import('./TabContent'));
// const NewYear = lazy(() => import('./NewYear'));

const Layout = () => {
    const [state, setState] = useState({
        status: false,
        download: 0,
        Last_name: '',
        First_name: '',
        Phone: '',
        Company: '',
        Department: '',
        Job_title: '',
        Email: '',
        Company_size: 0,
        Email_verification: true,
        Phone_verification: true,
        data: '',
        type: '',
        swipeItem: [
            {
                image: './images/product/1.png',
                info: '混合雲可擴充伺服器- IBM Power Systems',
                link: '/#'
            },
            {
                image: './images/product/1.png',
                info: '混合雲可擴充伺服器- IBM Power Systems',
                link: '/#'
            },
            {
                image: './images/product/1.png',
                info: '混合雲可擴充伺服器- IBM Power Systems',
                link: '/#'
            },
            {
                image: './images/product/1.png',
                info: '混合雲可擴充伺服器- IBM Power Systems',
                link: '/#'
            }
        ],
        videoIdx: 0,
        videoItem: [
            {
                id: 'qlcHH6wMaHU',
                state: '',
                title: 'AI 氾濫到聽了就想吐｜沒有 IA 就別想著 AI',
                text: '萬物皆 AI，公司老闆、主管也對人工智慧一頭熱。難道 AI 說有就能有，而且有了 AI 就一切好棒棒？​H.I.T. 真心話，告訴你投資 AI 前要該做的準備有哪些。',
                subscribe: '點擊下方影片播放鍵，下載「台灣企業AI落地關鍵報告」還有真實案例讓您不走冤枉路，同時看看H.I.T.怎麼說！',
                item: [
                    {
                        image: './images/product/1-1.png',
                        info: 'AI 時代專用處理器架構- IBM Power System AC922',
                        link: 'https://www.ibm.com/tw-zh/products/power-systems-ac922'
                    },
                    {
                        image: './images/product/1-2.png',
                        info: 'AI 時代專用處理器架構- IBM Power System IC922',
                        link: 'https://www.ibm.com/tw-zh/products/power-system-ic922'
                    },
                    {
                        image: './images/product/1-3.png',
                        info: '支援AI應用的高效能儲存架構- IBM Spectrum Scale',
                        link: 'https://www.ibm.com/tw-zh/products/spectrum-scale'
                    },
                    {
                        image: './images/product/1-4.png',
                        info: '支援AI應用的高效能儲存架構- IBM ESS3000',
                        link: 'https://www.ibm.com/tw-zh/products/elastic-storage-system'
                    }
                ],
                fileTitle: '邁向企業級人工智慧',
                fileText: '做到善用組織資料，在企業中發揮跨部門功效，根據深度資料洞察制定更明智的決策。',
                fileLink: 'https://www.digitimes.com.tw/seminar/IBM_20201116/pdf/%E9%82%81%E5%90%91%E4%BC%81%E6%A5%AD%E7%B4%9A%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7.pdf'
            },
            {
                id: '03O3HPPwOrk',
                state: '',
                title: '兼顧新舊設備，企業上雲不再擔心花錢買到爛東西',
                text: '正思考該如何為公司採購雲端設備嗎？想知道該如何買才能讓公有雲、私有雲間互通？H.I.T. 分享年末購物季，教你該如何正確花錢、買對混合雲組合方案。',
                subscribe: '點擊下方影片播放鍵，下載「企業混合多雲架構關鍵報告」讓您掌握雲秘訣，同時看看H.I.T.怎麼說！',
                item: [
                    {
                        image: './images/product/2-1.png',
                        info: '混合雲可擴充伺服器- IBM Power Systems',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/power'
                    },
                    {
                        image: './images/product/2-2.png',
                        info: '混合雲可擴充伺服器- IBM LinuxONE',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/linuxone'
                    },
                    {
                        image: './images/product/2-3.png',
                        info: '混合雲儲存架構- FlashSystem5000/7000/9000 系列',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/storage/flash'
                    },
                    {
                        image: './images/product/2-4.png',
                        info: '混合雲儲存架構- Spectrum Virtualize 儲存軟體',
                        link: 'https://www.ibm.com/tw-zh/products/spectrum-virtualize-for-public-cloud'
                    }
                ],
                fileTitle: '實現混合式多雲端的承諾',
                fileText: '讓您的基礎架構在保持永續運行下，亦可彈性擴充、敏捷反應以及符合成本效益，並且確保資料安全。',
                fileLink: 'https://www.digitimes.com.tw/seminar/IBM_20210104/pdf/%E5%AF%A6%E7%8F%BE%E6%B7%B7%E5%90%88%E5%BC%8F%E5%A4%9A%E9%9B%B2%E7%AB%AF%E7%9A%84%E6%89%BF%E8%AB%BE.pdf'
            },
            {
                id: 'gGDs6DoBSVk',
                state: 'new',
                title: '超全面儲存架構全家桶，一次滿足你所有願望！',
                text: '採購屬於公司基石的儲存設備，卻總是預算少、好煩惱？H.I.T 告訴你物超所值、超全面的 IBM 儲存架構產品線，提供各種需求所需的高效益數據分析儲存架構！​',
                subscribe: '點擊下方影片播放鍵，下載「IDC報告」，一次瞭解數位轉型資料與儲存可用性，同時看看H.I.T.怎麼說！',
                item: [
                    {
                        image: './images/product/3-1.png',
                        info: '混合式快閃記憶體儲存',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/storage/flash'
                    },
                    {
                        image: './images/product/3-2.png',
                        info: 'SAN 系列儲存',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/storage/san'
                    },
                    {
                        image: './images/product/3-3.png',
                        info: 'Spectrum Virtualize 儲存軟體',
                        link: 'https://www.ibm.com/tw-zh/products/spectrum-virtualize-for-public-cloud'
                    }
                ],
                fileTitle: '企業轉型管理高級儲存與資料策略',
                fileText: '滿足持續成長的業務需求，協助企業提高傳輸，為應用程式的持續增長創造空間並強化資料傳輸效能！',
                fileLink: 'https://www.digitimes.com.tw/seminar/IBM_20210104/pdf/%E4%BC%81%E6%A5%AD%E8%BD%89%E5%9E%8B%E7%AE%A1%E7%90%86%E9%AB%98%E7%B4%9A%E5%84%B2%E5%AD%98%E8%88%87%E8%B3%87%E6%96%99%E7%AD%96%E7%95%A5.pdf'
            },
            {
                id: 'nyTv-oPp-_E',
                state: 'new',
                title: '協尋好用的手機備份軟體！不怕資料空，只怕空備援',
                text: '現代人的手機是全世界，而企業的全世界是資料，想把資料保護好，H.I.T. 傳授備援秘訣，教你做好日常備份工作。',
                subscribe: '點擊下方影片播放鍵，下載「儲存主導Cyber Resilience發展關鍵報告」，資安保護多重要看看H.I.T.怎麼說！',
                item: [
                    {
                        image: './images/product/4-1.png',
                        info: '資料備份- IBM Spectrum Protect',
                        link: 'https://www.ibm.com/tw-zh/products/data-protection-and-recovery'
                    },
                    {
                        image: './images/product/4-2.png',
                        info: '資料歸檔- IBM Spectrum Protect Plus',
                        link: 'https://www.ibm.com/tw-zh/marketplace/ibm-spectrum-protect-plus'
                    },
                    {
                        image: './images/product/4-3.png',
                        info: '離線備份-IBM Storage 磁帶機',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/storage/tape/drives'
                    }
                ],
                fileTitle: '資料的新關鍵角色：網路彈性',
                fileText: '可以在確保業務正常運作下，為 IT 基礎架構的每個層面建立安全保護。',
                fileLink: 'https://www.digitimes.com.tw/seminar/IBM_20210104/pdf/%E8%B3%87%E6%96%99%E7%9A%84%E6%96%B0%E9%97%9C%E9%8D%B5%E8%A7%92%E8%89%B2%EF%BC%9A%E7%B6%B2%E8%B7%AF%E5%BD%88%E6%80%A7.pdf'
            },
            {
                id: 'hdQmMLXnz9A',
                state: 'new',
                title: '仙女下凡來解惑，IT 人的三大企業 ERP 問題',
                text: '現代人的手機是全世界，而企業的全世界是資料，想把資料保護好，H.I.T. 傳授備援秘訣，教你做好日常備份工作。',
                subscribe: '點擊下方影片播放鍵，瞭解企業如何降低50%的維護成本與提高66%生產效率，同時看看H.I.T.怎麼說！',
                item: [
                    {
                        image: './images/product/5-1.png',
                        info: '資料庫伺服器-SAP HANA on Power 伺服器',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/power/sap-hana'
                    },
                    {
                        image: './images/product/5-2.png',
                        info: '儲存架構-FlashSystem5000/7000/9000系列',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/storage/flash'
                    },
                    {
                        image: './images/product/5-3.png',
                        info: '資料備份-IBM Storage 磁帶機',
                        link: 'https://www.ibm.com/tw-zh/it-infrastructure/storage/tape/drives'
                    }
                ],
                fileTitle: '確保SAP HANA投資發揮效能極限！',
                fileText: '如何部署發揮新一代ERP-SAPHANA的全部實力，以智能自動化帶來企業成本效益，獲得即時洞察協助決策！',
                fileLink: 'https://www.digitimes.com.tw/seminar/IBM_20210104/pdf/%E7%A2%BA%E4%BF%9DSAP%20HANA%E6%8A%95%E8%B3%87%E7%99%BC%E6%8F%AE%E6%95%88%E8%83%BD%E6%A5%B5%E9%99%90%EF%BC%81.pdf'
            }
        ],
        CTAIdx: 0,
        CTA: [
            {
                id: 0,
                name: '',
                text: '取得 H.I.T 顧問神助攻解答解鎖完整影片與 IBM 關鍵趨勢報告'
            },
            {
                id: 1,
                name: 'Syspower',
                text: '留下聯絡資訊，獲得奇唯科技獨家優惠助力方案，為你的公司提前部署轉型策略！',
            },
            {
                id: 2,
                name: 'PTSC',
                text: '留下聯絡資訊，獲得北洋科技獨家優惠助力方案，為你的公司提前部署轉型策略！',
            },
            {
                id: 3,
                name: 'Systex',
                text: '留下聯絡資訊，獲得精誠科技獨家優惠助力方案，為你的公司提前部署轉型策略！',
            },
            {
                id: 4,
                name: 'DDSC',
                text: '留下聯絡資訊，獲得中菲電腦獨家優惠助力方案，為你的公司提前部署轉型策略！',
            },
            {
                id: 5,
                name: 'Bestcom',
                text: '留下聯絡資訊，獲得群環科技獨家優惠助力方案，為你的公司提前部署轉型策略！',
            },
            {
                id: 6,
                name: 'Neweb',
                text: '留下聯絡資訊，獲得藍新科技獨家優惠助力方案，為你的公司提前部署轉型策略！',
            },
            {
                id: 7,
                name: 'Sysage',
                text: '留下聯絡資訊，獲得聚碩科技獨家優惠助力方案，為你的公司提前部署轉型策略！',
            },
            {
                id: 8,
                name: 'Concord',
                text: '留下聯絡資訊，獲得康和資訊獨家優惠助力方案，為你的公司提前部署轉型策略！',
            }
        ],
        Brand: [
            {
                name: '奇唯科技',
                text: '主打產品：Big Data on ESS 3000',
                sub: '為您安排 VIP 級的儲存技術參訪行程，結合了實際情境與最新的軟體定義管理功能展示。',
                list: {
                    type: 'ol',
                    items: [
                        '結合 IBM Spectrum Scale與 NVMe 快閃記憶體儲存，提供終極的橫向擴充效能。',
                        '軟體定義的消除編碼可確保資料回復，而且與資料抄寫相比使用的空間比較少',
                        '提供廣泛的容量選擇，從每 2U 數十到數百 TB，部署為獨立式邊緣系統。'
                    ]
                }

            },
            {
                name: '北洋科技',
                text: '轉型關鍵時刻 – 創造企業第二曲線',
                sub: '',
                list: {
                    type: 'multi',
                    items: [
                        {
                            title: 'IBM FlashSystem 5100',
                            text: '以 NVMe 優化快閃記憶體速度，提供混和雲儲存功能增加商業敏捷性'
                        },
                        {
                            title: '北祥智慧服務機器人 - 嗨寶',
                            text: '依不同應用場域，以 AI 技術提供解決方案，有效降低 30%重複性質工作，從巨量的資料中，精準發掘商機'
                        },
                        {
                            title: 'IBM Cloud Pak for Data',
                            text: '可攜式的雲端原生平台搭配容器化技術，加快部署與AI開發。透過企業資料視覺化，協助經理人快速決策分析，消除成本高昂又相互競合的單點解決方案需求'
                        }
                    ]
                }

            },
            {
                name: '精誠資訊',
                text: '主打產品： <br/>IBM Power System AC922<br/>IBM Cloud Pak for Data',
                sub: '迎接人工智慧世代  輕鬆建構AI環境免煩惱！',
                list: {
                    type: 'ol',
                    items: [
                        '提供IBM AI運算環境平台快速部署與諮詢服務。',
                        '整合Cloud Pak for Data創建和訓練機器學習模型（machine learning models）​',
                        '內建自動訓練（AutoAI）包含自動參數調整、自動特徵工程選擇的模型​',
                        'Power System AC922加速訓練，提升影像判斷與決策品質​',
                        '提供深度學習顧問服務，包含:數據特徵情境評估﹅結構化資料優化﹅AI建模流程設計與諮詢'
                    ]
                }

            },
            {
                name: '中菲電腦',
                text: '主打產品：DB2 Mirror on Power',
                sub: '',
                list: {
                    type: 'ol',
                    items: [
                        '頂級高速資料庫雙活同步架構，通過即時監控、問題主動識別和自我修復極大化連續服務時間​',
                        '資料庫層級真雙活：雙節點都可讀取寫入資料，服務連續不間斷​',
                        '超高速同步‧架構彈性：RDMA技術搭配100Gbps RoCE 高速網卡，達到RTO等於零​',
                        '網頁介面‧管理輕鬆上手：擺脫指令操作門檻，圖形化網頁管理更直覺，縮短IT學習曲線​',
                        '物件同步儀表板‧精準掌握每一筆紀錄：同步資料數量、類型、進度、狀態一目瞭然​',
                        ' 物件比對功能‧保障一致性：背景比對節點間同步屬性差異，確保資料無誤差，達到RPO等於零​',
                        '台灣首套IBM i 7.4 DB2 Mirror展示體驗中心。領先全業界，提供更安心的高可用性解決方案。​'
                    ]
                }

            },
            {
                name: '群環科技',
                text: 'IBM FlashSystem混合式多雲端儲存最佳解決方案',
                sub: '',
                list: {
                    type: 'ul',
                    items: [
                        '提供客戶需求售前訪談及規劃',
                        '提供IBM FlashSystem5100測試機及技術支援POC',
                        '提供安裝服務及技術支援​',
                        '提供IBM Storage Insights整合跨品牌支援​',
                    ]
                }

            },
            {
                name: '藍新科技',
                text: '主打產品：SAP HANA on Power',
                sub: '藍新資訊身為IBM Power主機解決方案的領導廠商,在面對競爭強敵x86主機的挑戰下,仍協助多家企業主導入IBM作為其SAP HAHA的核心架構,基於停機時間最短、最高ROI的中心思想',
                list: {
                    type: 'ul',
                    items: [
                        '最強效能－單台主機即可睥睨多台x86系統',
                        '高可靠度－99.999% 高可用性, SAP與ITIC連續11年評比穩定性第1名',
                        '充分利用－可透過實體或虛擬分區技術執行多項工作負載, 滿足軟體授權',
                        '最佳投報－主機可持續使用近10年, 並可降低軟體授權投資',
                    ]
                }

            },
            {
                name: '聚碩科技',
                text: '',
                sub: '',
                list: {
                    type: 'ol',
                    items: [
                        '提供Cloud Pak on LinuxONE測試主機及技術支援POC',
                        '提供Oracle on LinuxONE測試主機及技術支援POC',
                    ]
                }

            },
            {
                name: '康和資訊',
                text: '主打產品：IBM LinuxONE伺服器＋IBM DS8884F存儲',
                sub: '',
                list: {
                    type: 'ol',
                    items: [
                        '最高等級的安全性 EAL5+ 主機等級虛擬化作業環境，資料庫檔案全加密，防範外洩，企業資安再強化。​',
                        '單一開放系統(Linux) ，99.999% 高可用度 (High Availability優於5個9, 接近6個9)。​',
                        '提升系統瞬間承載能力，每秒50筆交易資料提升到每秒300筆。​',
                        '預防單點失效，確保營運不中斷的 HA方案。'
                    ]
                }

            },
        ],
        Tab: [
            {
                title: '助攻組合 1： 混合雲整合支援 ',
                subtitle: ' 搶先實機體驗地表最強主機LinuxONE整合應用打造新世代混合雲創新平台',
                items: [
                    {
                        id: 5,
                        image: 'images/company/company6.png',
                        text: '混合多雲儲存架構支援\n專屬諮詢服務',
                        cta: '取得獨家顧問服務'
                    },
                    {
                        id: 8,
                        image: 'images/company/company8.png',
                        text: 'IBM LinuxONE 降本增效\n客戶專屬效益評估服務',
                        cta: '取得獨家顧問服務'
                    },
                    {
                        id: 7,
                        image: 'images/company/company7.png',
                        text: 'IBM Cloud Pak on LinuxONE\n客戶專屬商業價值評估服務',
                        cta: '取得獨家顧問服務'
                    },
                ]
            },
            {
                title: '助攻組合 2：人工智慧能力升級 ',
                subtitle: ' 複雜資訊架構、多種應用場景各種方案選擇，一次搞定',
                items: [
                    {
                        id: 2,
                        image: 'images/company/company2.png',
                        text: '專屬免費諮詢服務\n打造企業AI與數據策略',
                        cta: '取得獨家顧問服務'
                    },
                    {
                        id: 1,
                        image: 'images/company/company5.png',
                        text: 'ESS3000 AI 儲存神器\n技術VIP體驗行程',
                        cta: '獲得體驗通行證'
                    },

                    {
                        id: 3,
                        image: 'images/company/company1.png',
                        text: '免費機器學習\n專屬顧問諮詢服務',
                        cta: '取得獨家顧問服務'
                    },
                ]
            },

            {
                title: '助攻組合 3：奠基穩健的核心與架構 ',
                subtitle: ' 全方位儲存與運算平台無負擔打造可靠又高效的工作環境',
                items: [

                    {
                        id: 4,
                        image: 'images/company/company3.png',
                        text: '台灣首套IBM i7.4 DB2 Mirror 展示中心VIP 參訪行程',
                        cta: '獲得體驗通行證'
                    },

                    {
                        id: 6,
                        image: 'images/company/company4.png',
                        text: '最高ROI SAP HANA on Power 特價助攻方案',
                        cta: '取得助攻方案'
                    },
                ]
            }
        ]
    })
    const changeVideo = (e) => {
        if (state.videoItem[e].id !== "") {
            setState({
                ...state,
                videoIdx: e
            })
        }
    }
    const openForm = (_type, _id) => {
        setState({
            ...state,
            status: !state.status,
            type: _type,
            CTAIdx: _id ? _id : 0
        })
        // this.sendTrack(state.videoIdx, _type)
    }
    const onLastName = (e) => {
        setState({
            ...state,
            Last_name: e.target.value
        })
    }
    const onFirstName = (e) => {
        setState({
            ...state,
            First_name: e.target.value
        })
    }
    const onPhone = (e) => {
        setState({
            ...state,
            Phone: e.target.value
        })
    }
    const onCompany = (e) => {
        setState({
            ...state,
            Company: e.target.value
        })
    }
    const onDept = (e) => {
        setState({
            ...state,
            Department: e.target.value
        })
    }
    const onJob = (e) => {
        setState({
            ...state,
            Job_title: e.target.value
        })
    }
    const onEmail = (e) => {
        setState({
            ...state,
            Email: e.target.value
        })
    }
    const onScale = (e) => {
        setState({
            ...state,
            Company_size: e.target.value
        })
    }

    const ChangeEmail = () => {
        setState({
            ...state,
            Email_verification: !state.Email_verification
        })
    }
    const ChangePhone = () => {
        setState({
            ...state,
            Phone_verification: !state.Phone_verification
        })
    }
    const valid = () => {
        const {
            Last_name,
            First_name,
            Phone,
            Company,
            Department,
            Job_title,
            Email,
            Company_size,
            Email_verification,
            Phone_verification,
            CTA,
            CTAIdx
        } = state;

        // this.download();
        // this.sendTrack(state.videoIdx, state.type);

        const content = 'https://www.digitimes.com.tw/seminar/IBM_20210204/ajax/upload/';
        let re = /^[0-9]+$/;
        let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

        function getState(_state) {
            return _state ? "NOT CHECKED" : "CHECKED"
        }

        if (!Last_name) {
            alert("請輸入姓氏");
        } else if (!First_name) {
            alert("請輸入名字");
        } else if (!Email) {
            alert("請輸入電子信箱");
        } else if (!Company) {
            alert("請輸入任職公司");
        } else if (!Company_size) {
            alert("請輸入公司規模");
        } else if (!Department) {
            alert("請輸入公司部門");
        } else if (!Job_title) {
            alert("請輸入職稱");
        } else if (!re.test(Phone)) {
            alert("請輸入全數字電話格式");
        } else if (!emailRule.test(Email)) {
            alert("請輸入正確信箱格式");
        } else if (Last_name.match(/\d+/g) || First_name.match(/\d+/g)) {
            alert("名稱不得含有數字");
        } else {
            // console.log({
            //     Last_name,
            //     First_name,
            //     Phone,
            //     Company,
            //     Department,
            //     Job_title,
            //     Email,
            //     Company_size,
            //     Email_verification: getState(Email_verification),
            //     Phone_verification: getState(Phone_verification)
            // })	
            $.post(`${content}`, {
                Last_name,
                First_name,
                Phone,
                Company,
                Department,
                Job_title,
                Email,
                Company_size,
                Cta: CTA[CTAIdx].name,
                Email_verification: getState(Email_verification),
                Phone_verification: getState(Phone_verification)
            }, (result) => {
                console.log(result)
                download();
                sendTrack(state.videoIdx, state.type)
            });
        }
    }

    const sendTrack = (_id, _type) => {
        // console.log(_id, _type)
        $.post(`https://www.digitimes.com.tw/seminar/IBM_20210204/ajax/click/`, {
            Pid: _id,
            Title: state.videoItem[_id].fileTitle,
            Type: _type
        }, (result) => {
            console.log(result)
            // this.download();
        });
    }

    const download = () => {
        window.open(state.videoItem[state.videoIdx].fileLink, '_blank');

        $(".video__popup").fadeOut();
        setState({
            ...state,
            state: !state.status
        })

        // var link = document.createElement('a');
        // link.href = state.videoItem[state.videoIdx].fileLink;
        // link.download="";
        // link.click();
    }
    const {
        Last_name,
        First_name,
        Phone,
        Company,
        Department,
        Job_title,
        Email,
        Company_size,
        data,
        status,
        swipeItem,
        videoIdx,
        videoItem,
        Email_verification,
        Phone_verification,
        CTA,
        CTAIdx,
        Tab,
        Brand
    } = state;
    const contextValue = {
        Last_name,
        First_name,
        Phone,
        Company,
        Department,
        Job_title,
        Email,
        Company_size,
        data,
        swipeItem,
        videoIdx,
        videoItem,
        Email_verification,
        Phone_verification,
        CTA,
        CTAIdx,
        Tab,
        Brand,
        changeVideo,
        openForm,
        onLastName,
        onFirstName,
        onPhone,
        onCompany,
        onDept,
        onJob,
        onEmail,
        onScale,
        valid,
        download,
        ChangeEmail,
        ChangePhone,
    }
    return (
        <Fragment>
            <Provider value={contextValue}>

                {/* <Swipe /> */}
                <Video status={state} />
                <Download />
                <VideoContent />
                <NewYear />
                <Suspense fallback={<p>Loading...</p>}>
                    <TabContent />
                    {status ? <Form /> : ''}
                </Suspense>
            </Provider>
        </Fragment>
    )
}

export default Layout;