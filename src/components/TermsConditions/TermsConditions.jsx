"use client";
import Container from "../Shared/Container/Container";
import { Breadcrumb } from "antd";

const TermsConditions = () => {
  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Terms of Conditions</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <h1 className="text-3xl font-semibold my-5">We collect several types of information from and about users of our website and services, including:</h1>
          <div className="space-y-5">
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              felis ac justo consectetur commodo. Sed consectetur ipsum non
              dolor vulputate, at vulputate velit fermentum. Donec auctor, arcu
              sit amet pulvinar tincidunt, nisi nisi tincidunt nunc, vel
              tristique lectus ex vel diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              sodales ipsum sed turpis finibus, et efficitur ipsum rutrum. Donec
              vel ex at nunc semper facilisis.
            </p>
            <p className="text-lg">
              Nulla facilisi. Duis eget velit eu arcu placerat condimentum vel
              ac tellus. Donec non neque vel ipsum pharetra fermentum. Nulla
              facilisi. Donec vel ex at nunc semper facilisis.
            </p>
            <p className="text-lg">
              Sed vel felis ac justo consectetur commodo Sed consectetur ipsum
              non dolor vulputate, at vulputate velit fermentum. Donec auctor,
              arcu sit amet pulvinar tincidunt, nisi nisi tincidunt nunc, vel
              tristique lectus ex vel diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              sodales ipsum sed turpis finibus, et efficitur ipsum rutrum. Donec
              vel ex at nunc semper facilisis. Nulla facilisi. Duis eget velit
              eu arcu placerat condimentum vel ac tellus. Donec non neque vel
              ipsum pharetra fermentum. Nulla facilisi. Donec vel ex at nunc
              semper facilisis. Sed vel felis ac justo consectetur commodo Sed
              consectetur ipsum non dolor vulputate, at vulputate velit
              fermentum. Donec auctor, arcu sit amet pulvinar tincidunt, nisi
              nisi tincidunt nunc, vel tristique lectus ex vel diam. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Donec sodales ipsum sed turpis finibus, et
              efficitur ipsum rutrum. Donec vel ex at nunc semper facilisis.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TermsConditions;
