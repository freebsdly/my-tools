import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";

const Xterminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal({
      cursorBlink: true,
      fontFamily: "monospace",
      fontSize: 14,
      rows: 30,
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      fitAddon.fit();
    }

    // 你可以在这里添加更多的终端配置或事件处理
    terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");

    terminal.onData((data) => {
      // 处理终端输入的数据
      terminal.write(data);
    });

    // 处理窗口大小变化
    const handleResize = () => {
      fitAddon.fit();
    };
    window.addEventListener("resize", handleResize);

    // 清理函数
    return () => {
      window.removeEventListener("resize", handleResize);
      terminal.dispose();
    };
  }, []);

  return <div ref={terminalRef} />;
};

export default Xterminal;
