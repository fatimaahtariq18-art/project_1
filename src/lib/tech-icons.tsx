"use client";

import React from "react";
import { DiJavascript, DiRedis } from "react-icons/di";
import { FaAws, FaDocker, FaJava, FaLaravel, FaNodeJs, FaPhp, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { RiAngularjsLine, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiNuxt, SiFastify, SiFastapi, SiDjango, SiMongodb, SiPostgresql, SiTerraform, SiLangchain, SiTensorflow, SiPytorch, SiKubernetes, SiReactnative, SiFlutter, SiAndroid, SiIos, SiOpenai, SiGooglecloud } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { BsTypescript } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";

export const iconMap: Record<string, React.ReactNode> = {
  // Frontend
  DiJavascript: <DiJavascript className="text-[1.5em]" />,
  BsTypescript: <BsTypescript className="text-[1.5em]" />,
  FaReact: <FaReact className="text-[1.5em]" />,
  RiNextjsLine: <RiNextjsLine className="text-[1.5em]" />,
  FaVuejs: <FaVuejs className="text-[1.5em]" />,
  SiNuxt: <SiNuxt className="text-[1.5em]" />,
  RiAngularjsLine: <RiAngularjsLine className="text-[1.5em]" />,
  RiTailwindCssFill: <RiTailwindCssFill className="text-[1.5em]" />,

  // Backend
  FaNodeJs: <FaNodeJs className="text-[1.5em]" />,
  SiNestjs: <SiNestjs className="text-[1.5em]" />,
  SiFastify: <SiFastify className="text-[1.5em]" />,
  FaPython: <FaPython className="text-[1.5em]" />,
  SiFastapi: <SiFastapi className="text-[1.5em]" />,
  SiDjango: <SiDjango className="text-[1.5em]" />,
  FaJava: <FaJava className="text-[1.5em]" />,
  BiLogoSpringBoot: <BiLogoSpringBoot className="text-[1.5em]" />,
  FaPhp: <FaPhp className="text-[1.5em]" />,
  FaLaravel: <FaLaravel className="text-[1.5em]" />,

  // Database
  SiMongodb: <SiMongodb className="text-[1.5em]" />,
  SiPostgresql: <SiPostgresql className="text-[1.5em]" />,
  GrMysql: <GrMysql className="text-[1.5em]" />,
  DiRedis: <DiRedis className="text-[1.5em]" />,
  IoLogoFirebase: <SiMongodb className="text-[1.5em]" />,

  // DevOps
  FaAws: <FaAws className="text-[1.5em]" />,
  VscAzure: <VscAzure className="text-[1.5em]" />,
  SiGooglecloud: <SiGooglecloud className="text-[1.5em]" />,
  FaDocker: <FaDocker className="text-[1.5em]" />,
  SiKubernetes: <SiKubernetes className="text-[1.5em]" />,
  SiTerraform: <SiTerraform className="text-[1.5em]" />,

  // Mobile
  TbBrandReactNative: <TbBrandReactNative className="text-[1.5em]" />,
  SiFlutter: <SiFlutter className="text-[1.5em]" />,
  SiAndroid: <SiAndroid className="text-[1.5em]" />,
  SiIos: <SiIos className="text-[1.5em]" />,

  // AI & ML
  SiOpenai: <SiOpenai className="text-[1.5em]" />,
  SiLangchain: <SiLangchain className="text-[1.5em]" />,
  SiTensorflow: <SiTensorflow className="text-[1.5em]" />,
  SiPytorch: <SiPytorch className="text-[1.5em]" />,
};

export function getTechIcon(iconName: string) {
  return iconMap[iconName] || <div className="text-lg font-bold">?</div>;
}
