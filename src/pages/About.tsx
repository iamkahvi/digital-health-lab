import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { TextWrapper } from "../styles/components";

export default function About() {
  return (
    <div>
      <Header />
      <Layout>
        <TextWrapper>
          <h1>Digital Health Lab</h1>
          <h2>Family-Based Childhood Obesity Prevention Intervention</h2>
          <p>
            The Childhood Healthy Weights Early Intervention Program (EIP) is a
            family-based pilot program that will promote healthy lifestyle
            practices for families whose children are off the healthy weight
            trajectory (e.g., BMI ≥ 85th percentile for age and sex) that do not
            need the intensive services of medically supervised programs. It is
            a lifestyle behaviour approach for promoting healthy weights in
            children.
          </p>
          <img src={`${process.env.PUBLIC_URL}/swing.jpg`} alt="swingset"></img>
          <p>
            The EIP program consists of 10 weekly intervention sessions (1.5
            hours per session) followed by 4 maintenance sessions and is age
            specific (age 8-12). During the intervention, participants will also
            have access to digital educational content that is supplementary to
            what is provided during the individual sessions. The program will be
            integrated and aligned with existing BC-specific childhood healthy
            weights programs (e.g., Shapedown BC and the HealthLinkBC Eating and
            Activity Program for Kids).
          </p>
          <p>
            The EIP pilot will take place in multiple sites across B.C with 8
            child programs (age 8-12). Participants who do not qualify for this
            program (e.g., BMI ≤ 85th percentile for age and sex) will be
            offered a 10-week online program which is similar in educational
            content as the EIP program.
          </p>
        </TextWrapper>
      </Layout>
    </div>
  );
}
