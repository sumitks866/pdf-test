import React, { useRef } from "react";
import { savePDF } from "@progress/kendo-react-pdf";
import "./App.css";

function App() {
  const pdfRef = useRef<any>(null);

  const exportToPDF = () => {
    setTimeout(() => {
      pdfRef &&
        savePDF(
          pdfRef.current,
          {
            fileName: `testing`,
            paperSize: "A4",
            scale: 0.6,
            margin: "0.3cm",
            date: new Date(),
            creator: "xyz",
            producer: "xyz",
            forcePageBreak: ".page-break",
            keepTogether: ".prevent-split",
          },
          () => {}
        );
    }, 500);
  };

  return (
    <div className="App">
      <button onClick={() => exportToPDF()}>Export</button>
      <section ref={pdfRef}>
        <div className="card">
          {
            "케이스를 관리하려면 추가 액세스 권한이 필요합니다. 지원이 필요한 경우 고객 서비스</2>에 문의하십시오. 자세한 내용은 다음에서 확인하십시오: 현재 케이스 목록을 CSV로 내보냅니다. 다수의 케이스를 내보내는 데 시간이 걸릴 수 있습니다."
          }
          <br />
          <br />
          {
            "可能であれば、問題を詳細に説明してください。問題の解決に役立ちます。すべてのフィールドはオプションです お使いのアカウント内から他の受信者を指定する場合は、組織管理者である必要があります。"
          }
          <br />
          <br />
          {
            "Исправления для наиболее распространенных проблем Если возможно, опишите проблему более подробно, чтобы помочь нам улучшить результаты"
          }
          <br />
          <br />
          The quick brown fox jumped over a lazy dog. áãêéçíóõ
        </div>
      </section>
    </div>
  );
}

export default App;
