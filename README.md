# Self Paced Reading Task

## 1. Description

This is a **self-paced reading task**, an experimental test commonly used for psycholinguistic research.

These typically work with a moving window paradigm, by which only one segment of the target structure is shown at a time. The participants are asked to press, in this case, space bar to show the next segment and progress through the task.

This specific test was designed to look at parsing differences between object relative clauses and subject relative clauses by adult bilinguals. Additionally, its experimental items vary in number similarity to examine whether this is a factor that affects sentence processing.

This web-based test was designed using the [jsPsych](https://www.jspsych.org/latest/) package for _JavaScript_, involving the use of _HTML_ for web structure and _CSS_ for aesthetics.

## 2. Objectives

As mentioned previously, this self-paced reading task is aimed at answering two research questions:

1. **RQ1**: Do Spanish-English bilingual adults process subject relative clauses faster than object relative clauses?

2. **RQ2**: Does number dissimilarity between the DPs help in processing object relative clauses?

These questions and the results will be interpreted from a featural approach to Relativized Minimality.

## 3. Data and Variables

The experiment will gather reaction time data by creating an observation each time space bar is pressed. This will be interpreted as an indication of reading times, hinting at what segments of each item take longer or shorter to read.

The items in this task are classified according to two variables, one for each research question:

1. `clause_type` holds either `sr` for subject relative or `or` for object relative.

2. `number` holds either `ss` for singular-singular, `pp` for plural-plural, `sp` for singular-plural or `ps` for plural-singular.

They are also categorized according to `item_type`, which can hold `pr_item` for practice items, `fill_item` for filler items or `exp_item` for experimental items.

Additionally, some items have a `question` value other than `false`, which makes the question appear after the last segment of that item is presented to the participants. Although this gathers data on accuracy, this is mainly done as a tool to prevent participants from skimming through the items.

## 4. Installation and Usage

Here are the steps for installing and running this self-paced reading task:

1. Go to [Releases](https://github.com/Vieju17/SelfPaced_Reading_Task/releases) and select the **latest version**.
2. Download the zip file called _Source code_.
3. Unzip the file and save the contents to your preferred destination.
4. Right-click on the file named _index.html_, select _Open with..._ and then select _Google Chrome_. The task should now open on your navigator and you should be able to proceed.
5. Once the task has finished, press "o" to download the data locally.

Alternatively, if you do not want access to the source code, just click on [this link](https://victor-lopez17.github.io/SelfPaced_Reading_Task/).

⚠️ **_It is strongly recommended to run the experiment on Chrome, as other web browsers might render it differently and cause visual artifacts, or worse._**
