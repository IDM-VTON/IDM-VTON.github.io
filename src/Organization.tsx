import Author from "./Author";
import Department from "./Department";
import CODEBtn from "./CODEBtn";
import PDFBtn from "./PDFBtn";
import { AuthorInfo, DepartmentInfo } from "./types";

const authors: AuthorInfo[] = [
  {
    name: "Yisol Choi",
    ref: "1",
    page: "https://alinlab.kaist.ac.kr/members.html"
  },
  {
    name: "Sangkyung Kwak",
    ref: "1",
    page: "https://alinlab.kaist.ac.kr/members.html"
  },
  {
    name: "Kyungmin Lee",
    ref: "1",
    page: "https://kyungmnlee.github.io/"
  },
  {
    name: "Hyungwon Choi",
    ref: "2",
    page: "https://www.linkedin.com/in/hyungwon-choi"
  },
  {
    name: "Jinwoo Shin",
    ref: "1",
    page: "https://alinlab.kaist.ac.kr/shin.html"
  }
];

const departments: DepartmentInfo[] = [
  {
    name: "KAIST",
    ref: "1"
  },
  {
    name: "OMNIOUS.AI",
    ref: "2"
  }
];

const Organization = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Author authors={authors} />
      </div>
      <div>
        <Department departments={departments} />
      </div>
      <div className="flex justify-center items-center">
        <PDFBtn placeholder="Paper" />
        <CODEBtn placeholder="Code" />
      </div>
    </div>
  );
};

export default Organization;
