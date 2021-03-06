import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton
} from "@nodegui/nodegui";

const notifier = require("node-notifier");

const win = new QMainWindow();
win.setWindowTitle("Notification App");
win.setMinimumSize(450, 300);

const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const label = new QLabel();
label.setObjectName("mylabel");
label.setText("Test");

const label2 = new QLabel();
label2.setText("Notification");

const button = new QPushButton();
button.setObjectName("button");
button.setText("Display Notification");
button.addEventListener("clicked", () => {
  console.log("You clicked the button");
  notifier.notify({
    title: "My notification",
    message: "Hello, there!"
  });
});

rootLayout.addWidget(label);
rootLayout.addWidget(label2);
rootLayout.addWidget(button);
win.setCentralWidget(centralWidget);
win.setStyleSheet(
  `
    #myroot {
      height: "100%";
      align-items: "center";
      justify-content: "center";
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
    }
    #button {
      background-color: red;
  }
    #button:hover {
      color: dodgerblue;
    }
  `
);
win.show();

global.win = win;
