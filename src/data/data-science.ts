import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface DataScienceLessonData extends BaseLessonData {
  dataScienceConcepts?: string[];
  tools?: string[];
  algorithms?: string[];
  practicalProjects?: Array<{
    title: string;
    description: string;
    dataset: string;
    techniques: string[];
    deliverables: string[];
  }>;
}

export const DataScienceLessons: DataScienceLessonData[] = [
  {
    id: 'data-science-fundamentals',
    title: 'Cơ bản về Data Science',
    description:
      'Tìm hiểu các khái niệm cơ bản của khoa học dữ liệu, từ thu thập đến phân tích và trực quan hóa dữ liệu.',
    duration: '150 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=nS-z5JgqNe0', // Statistics Tutorial - NumPy Regression Analysis
    imageUrl: '/images/data-science-fundamentals.jpg',
    objectives: [
      'Hiểu quy trình Data Science lifecycle (CRISP-DM)',
      'Nắm vững các loại dữ liệu và phương pháp thu thập',
      'Học cách làm sạch và chuẩn bị dữ liệu',
      'Thực hành Exploratory Data Analysis (EDA)',
    ],
    prerequisites: [
      'Toán học cơ bản: thống kê, đại số',
      'Lập trình Python cơ bản',
      'Excel và Google Sheets',
      'Tư duy logic và phân tích',
    ],
    exercises: [
      {
        title: 'Complete Data Analysis Project',
        description: 'Thực hiện dự án phân tích dữ liệu hoàn chỉnh từ A-Z với dataset bán hàng',
        difficulty: 'Cơ bản',
        materials: ['Python', 'pandas', 'matplotlib', 'seaborn', 'numpy', 'Sales dataset'],
        procedure: [
          'Download và load sales dataset với pandas',
          'Data exploration: info(), describe(), dtypes',
          'Data cleaning: handle missing values, duplicates, outliers',
          'Feature engineering: create new variables từ date/time',
          'Exploratory Data Analysis với visualization',
          'Statistical analysis: correlation, hypothesis testing',
          'Create comprehensive report với insights',
          'Build interactive dashboard với recommendations',
        ],
        expectedResults: 'Professional data analysis report với actionable business insights',
        solution:
          '# Complete Data Science Project: Sales Analysis\\nimport pandas as pd\\nimport numpy as np\\nimport matplotlib.pyplot as plt\\nimport seaborn as sns\\nfrom datetime import datetime\\nimport warnings\\nwarnings.filterwarnings("ignore")\\n\\n# 1. Data Loading và Initial Exploration\\ndf = pd.read_csv("sales_data.csv")\\nprint("Dataset Shape:", df.shape)\\nprint("\\nColumn Info:")\\nprint(df.info())\\nprint("\\nFirst 5 rows:")\\nprint(df.head())\\n\\n# 2. Data Quality Assessment\\nprint("\\nMissing Values:")\\nprint(df.isnull().sum())\\nprint("\\nDuplicate Rows:", df.duplicated().sum())\\nprint("\\nData Types:")\\nprint(df.dtypes)\\n\\n# 3. Data Cleaning\\n# Handle missing values\\ndf["customer_age"].fillna(df["customer_age"].median(), inplace=True)\\ndf["product_category"].fillna("Unknown", inplace=True)\\n\\n# Remove duplicates\\ndf = df.drop_duplicates()\\n\\n# Convert date columns\\ndf["order_date"] = pd.to_datetime(df["order_date"])\\ndf["ship_date"] = pd.to_datetime(df["ship_date"])\\n\\n# 4. Feature Engineering\\ndf["year"] = df["order_date"].dt.year\\ndf["month"] = df["order_date"].dt.month\\ndf["quarter"] = df["order_date"].dt.quarter\\ndf["day_of_week"] = df["order_date"].dt.day_name()\\ndf["shipping_days"] = (df["ship_date"] - df["order_date"]).dt.days\\ndf["profit_margin"] = (df["profit"] / df["sales"]) * 100\\n\\n# 5. Exploratory Data Analysis\\nfig, axes = plt.subplots(2, 3, figsize=(18, 12))\\n\\n# Sales trend over time\\nmonthly_sales = df.groupby(["year", "month"])["sales"].sum().reset_index()\\nmonthly_sales["date"] = pd.to_datetime(monthly_sales[["year", "month"]].assign(day=1))\\naxes[0,0].plot(monthly_sales["date"], monthly_sales["sales"])\\naxes[0,0].set_title("Monthly Sales Trend")\\naxes[0,0].tick_params(axis="x", rotation=45)\\n\\n# Sales by category\\ncategory_sales = df.groupby("product_category")["sales"].sum().sort_values(ascending=False)\\naxes[0,1].bar(category_sales.index, category_sales.values)\\naxes[0,1].set_title("Sales by Product Category")\\naxes[0,1].tick_params(axis="x", rotation=45)\\n\\n# Customer distribution\\naxes[0,2].hist(df["customer_age"], bins=20, edgecolor="black")\\naxes[0,2].set_title("Customer Age Distribution")\\n\\n# Profit margin distribution\\naxes[1,0].boxplot(df["profit_margin"])\\naxes[1,0].set_title("Profit Margin Distribution")\\n\\n# Sales vs Profit correlation\\naxes[1,1].scatter(df["sales"], df["profit"], alpha=0.6)\\naxes[1,1].set_xlabel("Sales")\\naxes[1,1].set_ylabel("Profit")\\naxes[1,1].set_title("Sales vs Profit Correlation")\\n\\n# Regional performance\\nregion_performance = df.groupby("region").agg({\\n    "sales": "sum",\\n    "profit": "sum",\\n    "quantity": "sum"\\n}).reset_index()\\naxes[1,2].bar(region_performance["region"], region_performance["sales"])\\naxes[1,2].set_title("Sales by Region")\\naxes[1,2].tick_params(axis="x", rotation=45)\\n\\nplt.tight_layout()\\nplt.show()\\n\\n# 6. Statistical Analysis\\nprint("\\n=== STATISTICAL ANALYSIS ===")\\n\\n# Correlation analysis\\ncorr_matrix = df[["sales", "profit", "quantity", "customer_age", "shipping_days"]].corr()\\nprint("\\nCorrelation Matrix:")\\nprint(corr_matrix)\\n\\n# Advanced statistics\\nprint(f"\\nAverage Order Value: ${df["sales"].mean():.2f}")\\nprint(f"Median Profit Margin: {df["profit_margin"].median():.1f}%")\\nprint(f"Top Performing Region: {region_performance.loc[region_performance["sales"].idxmax(), "region"]}")\\nprint(f"Most Popular Product Category: {category_sales.index[0]}")\\n\\n# 7. Advanced Analysis\\n# Customer segmentation\\ndf["customer_value"] = df.groupby("customer_id")["sales"].transform("sum")\\ndf["purchase_frequency"] = df.groupby("customer_id")["order_id"].transform("count")\\n\\n# RFM Analysis (Recency, Frequency, Monetary)\\ncustomer_rfm = df.groupby("customer_id").agg({\\n    "order_date": "max",\\n    "order_id": "count",\\n    "sales": "sum"\\n}).reset_index()\\n\\ncustomer_rfm.columns = ["customer_id", "last_purchase", "frequency", "monetary"]\\ncustomer_rfm["recency"] = (datetime.now() - customer_rfm["last_purchase"]).dt.days\\n\\n# RFM Scoring\\ncustomer_rfm["R_score"] = pd.qcut(customer_rfm["recency"], 5, labels=[5,4,3,2,1])\\ncustomer_rfm["F_score"] = pd.qcut(customer_rfm["frequency"].rank(method="first"), 5, labels=[1,2,3,4,5])\\ncustomer_rfm["M_score"] = pd.qcut(customer_rfm["monetary"], 5, labels=[1,2,3,4,5])\\n\\ncustomer_rfm["RFM_Score"] = (customer_rfm["R_score"].astype(str) + \\n                             customer_rfm["F_score"].astype(str) + \\n                             customer_rfm["M_score"].astype(str))\\n\\n# Customer segments\\ndef segment_customers(row):\\n    if row["RFM_Score"] in ["555", "554", "544", "545", "454", "455", "445"]:\\n        return "Champions"\\n    elif row["RFM_Score"] in ["543", "444", "435", "355", "354", "345", "344", "335"]:\\n        return "Loyal"\\n    elif row["RFM_Score"] in ["512", "511", "422", "421", "412", "411", "311"]:\\n        return "New Customers"\\n    elif row["RFM_Score"] in ["155", "154", "144", "214", "215", "115", "114"]:\\n        return "At Risk"\\n    else:\\n        return "Others"\\n\\ncustomer_rfm["Segment"] = customer_rfm.apply(segment_customers, axis=1)\\n\\n# 8. Business Insights Generation\\nprint("\\n=== BUSINESS INSIGHTS ===")\\n\\n# Top insights\\ninsights = []\\n\\n# Revenue insights\\ntotal_revenue = df["sales"].sum()\\ntotal_profit = df["profit"].sum()\\noverall_margin = (total_profit / total_revenue) * 100\\ninsights.append(f"Total Revenue: ${total_revenue:,.2f} với Profit Margin: {overall_margin:.1f}%")\\n\\n# Growth insights\\nif len(df["year"].unique()) > 1:\\n    yearly_growth = df.groupby("year")["sales"].sum().pct_change().mean() * 100\\n    insights.append(f"Average Year-over-Year Growth: {yearly_growth:.1f}%")\\n\\n# Customer insights\\ncustomer_segments = customer_rfm["Segment"].value_counts()\\ninsights.append(f"Champions customers: {customer_segments.get("Champions", 0)} ({customer_segments.get("Champions", 0)/len(customer_rfm)*100:.1f}%)")\\n\\n# Product insights\\ntop_category = category_sales.index[0]\\ntop_category_share = (category_sales.iloc[0] / category_sales.sum()) * 100\\ninsights.append(f"Top Category: {top_category} ({top_category_share:.1f}% of total sales)")\\n\\n# Operational insights\\navg_shipping = df["shipping_days"].mean()\\nfast_shipping_rate = (df["shipping_days"] <= 3).mean() * 100\\ninsights.append(f"Average Shipping: {avg_shipping:.1f} days, Fast Shipping Rate: {fast_shipping_rate:.1f}%")\\n\\n# Print insights\\nfor i, insight trong enumerate(insights, 1):\\n    print(f"{i}. {insight}")\\n\\n# 9. Recommendations\\nprint("\\n=== STRATEGIC RECOMMENDATIONS ===")\\n\\nrecommendations = [\\n    "Focus marketing efforts on Champions và Loyal customer segments",\\n    f"Investigate {top_category} category expansion opportunities",\\n    "Implement faster shipping options to improve customer satisfaction",\\n    "Develop retention programs for At Risk customers",\\n    "Optimize inventory management cho seasonal trends",\\n    "Consider dynamic pricing strategies cho high-margin products"\\n]\\n\\nfor i, rec trong enumerate(recommendations, 1):\\n    print(f"{i}. {rec}")\\n\\n# 10. Create Summary Dashboard\\nfig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(15, 10))\\n\\n# KPI Summary\\nkpis = {\\n    "Total Revenue": f"${total_revenue/1e6:.1f}M",\\n    "Total Profit": f"${total_profit/1e6:.1f}M",\\n    "Profit Margin": f"{overall_margin:.1f}%",\\n    "Avg Order": f"${df["sales"].mean():.0f}"\\n}\\n\\nax1.axis("off")\\nkpi_text = "\\n".join([f"{k}: {v}" for k, v trong kpis.items()])\\nax1.text(0.1, 0.5, kpi_text, fontsize=14, verticalalignment="center")\\nax1.set_title("Key Performance Indicators", fontsize=16, fontweight="bold")\\n\\n# Customer Segments\\ncustomer_segments.plot(kind="pie", ax=ax2, autopct="%1.1f%%")\\nax2.set_title("Customer Segments")\\nax2.set_ylabel("")\\n\\n# Monthly Trend\\nmonthly_sales.set_index("date")["sales"].plot(ax=ax3)\\nax3.set_title("Monthly Sales Trend")\\nax3.set_ylabel("Sales ($)")\\n\\n# Top Products\\ntop_products = df.groupby("product_name")["sales"].sum().nlargest(10)\\ntop_products.plot(kind="barh", ax=ax4)\\nax4.set_title("Top 10 Products by Sales")\\n\\nplt.tight_layout()\\nplt.show()\\n\\nprint("\\n=== DATA SCIENCE PROJECT COMPLETED ===")\\nprint("Deliverables:")\\nprint("1. Clean dataset với engineered features")\\nprint("2. Comprehensive EDA với visualizations")\\nprint("3. Customer segmentation using RFM analysis")\\nprint("4. Business insights và actionable recommendations")\\nprint("5. Executive dashboard với key metrics")',
      },
    ],
    realWorldApplications: [
      'Business intelligence và decision support',
      'Customer analytics và segmentation',
      'Sales forecasting và demand planning',
      'Marketing campaign optimization',
      'Product recommendation systems',
    ],
    caseStudies: [
      {
        title: 'Netflix Recommendation System',
        organization: 'Netflix Inc.',
        problem: 'Improve content discovery và user engagement',
        solution: 'Machine learning algorithms analyzing viewing patterns, ratings, demographics',
        impact: '80% of content watched comes from recommendations, $1B+ annual value',
        innovations: ['Collaborative filtering', 'Content-based filtering', 'Deep learning models'],
      },
    ],
    dataScienceConcepts: [
      'CRISP-DM Methodology',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Statistical Analysis',
      'Data Visualization',
    ],
    tools: ['Python', 'pandas', 'matplotlib', 'seaborn', 'numpy'],
  },
  {
    id: 'machine-learning-algorithms',
    title: 'Machine Learning Algorithms',
    description: 'Học các thuật toán machine learning phổ biến và cách áp dụng trong thực tế.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=aircAruvnKk',
    objectives: [
      'Nắm vững supervised, unsupervised, reinforcement learning',
      'Thực hành với các thuật toán: regression, classification, clustering',
      'Hiểu model evaluation và cross-validation',
      'Áp dụng machine learning cho business problems',
    ],
    prerequisites: [
      'Data Science fundamentals',
      'Python programming',
      'Statistics và probability',
      'Linear algebra cơ bản',
    ],
    exercises: [
      {
        title: 'Build Predictive Models Portfolio',
        description: 'Xây dựng portfolio các mô hình ML cho different business scenarios',
        difficulty: 'Nâng cao',
        materials: ['scikit-learn', 'XGBoost', 'TensorFlow', 'Multiple datasets'],
        procedure: [
          'Classification: Customer churn prediction',
          'Regression: House price prediction',
          'Clustering: Customer segmentation',
          'Time series: Sales forecasting',
          'NLP: Sentiment analysis',
          'Model comparison và evaluation',
          'Hyperparameter tuning',
          'Model deployment preparation',
        ],
      },
    ],
    realWorldApplications: [
      'Predictive analytics trong finance',
      'Recommendation engines',
      'Image và speech recognition',
      'Autonomous systems',
      'Medical diagnosis assistance',
    ],
    algorithms: [
      'Linear Regression',
      'Random Forest',
      'Support Vector Machines',
      'K-Means Clustering',
      'Neural Networks',
    ],
  },
  {
    id: 'big-data-analytics',
    title: 'Big Data Analytics',
    description: 'Làm việc với dữ liệu lớn sử dụng các công cụ và framework hiện đại.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu big data challenges: Volume, Velocity, Variety',
      'Sử dụng Apache Spark cho distributed computing',
      'Làm việc với cloud platforms (AWS, Google Cloud)',
      'Streaming data processing với Kafka',
    ],
    prerequisites: [
      'Data Science và ML experience',
      'Database knowledge (SQL)',
      'Cloud computing basics',
      'Programming skills',
    ],
    exercises: [
      {
        title: 'Real-time Analytics Pipeline',
        description: 'Xây dựng end-to-end big data pipeline với real-time processing',
        difficulty: 'Chuyên gia',
        procedure: [
          'Setup Apache Kafka cho data streaming',
          'Process data với Apache Spark',
          'Store results trong cloud databases',
          'Create real-time dashboards',
          'Implement monitoring và alerting',
          'Scale system cho production workloads',
        ],
      },
    ],
    realWorldApplications: [
      'Social media analytics',
      'IoT sensor data processing',
      'Financial trading systems',
      'Supply chain optimization',
      'Smart city applications',
    ],
  },
  {
    id: 'data-visualization-storytelling',
    title: 'Data Visualization và Storytelling',
    description: 'Tạo ra các visualization hiệu quả và kể chuyện với dữ liệu.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Design principles cho effective visualizations',
      'Sử dụng Tableau, Power BI, Python visualization',
      'Interactive dashboards và reports',
      'Data storytelling techniques',
    ],
    prerequisites: ['Data analysis experience', 'Basic design sense', 'Understanding of business context'],
    exercises: [
      {
        title: 'Executive Dashboard Creation',
        description: 'Tạo executive dashboard tương tác với multiple data sources',
        difficulty: 'Trung bình',
        procedure: [
          'Requirements gathering từ stakeholders',
          'Data integration từ multiple sources',
          'Design wireframes và user flows',
          'Build interactive visualizations',
          'Implement filters và drill-down capabilities',
          'User testing và feedback incorporation',
          'Deploy và maintain dashboard',
        ],
      },
    ],
    realWorldApplications: [
      'Business intelligence dashboards',
      'Marketing campaign reporting',
      'Operations monitoring',
      'Financial reporting automation',
      'Academic research presentation',
    ],
    practicalProjects: [
      {
        title: 'COVID-19 Data Dashboard',
        description: 'Interactive dashboard tracking pandemic metrics',
        dataset: 'WHO COVID-19 data',
        techniques: ['Time series visualization', 'Geographic mapping', 'Comparative analysis'],
        deliverables: ['Public dashboard', 'Mobile-responsive design', 'Automated updates'],
      },
    ],
  },
];
