import pandas as pd


def calculate_demographic_data(print_data=True):
    # Read data from file
    df = pd.read_csv('adult_data.csv')

    # How many of each race are represented in this dataset? This should be a Pandas series with race names as the index labels.
    race_count = df['race'].value_counts()

    # What is the average age of men?
    average_age_men = df.loc[df['sex'] == 'Male','age'].mean()

    # What is the percentage of people who have a Bachelor's degree?
    percentage_bachelors = (df.loc[df['education']=='Bachelors'].shape[0] / df['education'].value_counts().sum()) * 100

    # What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
    # What percentage of people without advanced education make more than 50K?

    # with and without `Bachelors`, `Masters`, or `Doctorate`
    higher_education = df.loc[(df['education']=='Bachelors')|(df['education']=='Masters') | (df['education']=='Doctorate')].shape[0] / df['education'].value_counts().sum() * 100
    lower_education =df.loc[~(df['education']=='Bachelors') & ~(df['education']=='Masters') & ~(df['education']=='Doctorate')].shape[0] / df['education'].value_counts().sum() * 100 

    # percentage with salary >50K
    higher_education_rich = df.loc[(df['salary'] == '>50K') & (df['education']=='Bachelors')|(df['education']=='Masters') | (df['education']=='Doctorate')].shape[0] / df['education'].value_counts().sum() * 100
    lower_education_rich = df.loc[(df['salary'] == '>50K') & ~(df['education']=='Bachelors') & ~(df['education']=='Masters') & ~(df['education']=='Doctorate')].shape[0] / df['education'].value_counts().sum() * 100

    # What is the minimum number of hours a person works per week (hours-per-week feature)?
    min_work_hours = df['hours-per-week'].min()

    # What percentage of the people who work the minimum number of hours per week have a salary of >50K?
    num_min_workers = df.loc[df['hours-per-week'] == 1].shape[0]

    rich_percentage = df.loc[(df['hours-per-week'] == 1) & (df['salary']== '>50K')].shape[0] / df.shape[0] * 100

    # What country has the highest percentage of people that earn >50K?
    highest_earning_country = df.loc[df['salary'] == '>50K','native-country'].value_counts().index[0]
    highest_earning_country_percentage = df.loc[df['salary'] == '>50K','native-country'].value_counts()[0] / df.shape[0] * 100

    # Identify the most popular occupation for those who earn >50K in India.
    top_IN_occupation = df.loc[(df['native-country'] == 'India') & (df['salary']== '>50K'),'occupation'].value_counts().index[0]
