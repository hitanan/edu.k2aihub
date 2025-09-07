import { BaseLessonData } from '@/types/lesson-base';

export const DataScienceLessons: BaseLessonData[] = [
  {
    id: 'data-science-fundamentals',
    title: 'Cơ bản về Data Science',
    description:
      'Tìm hiểu các khái niệm cơ bản của khoa học dữ liệu, từ thu thập đến phân tích và trực quan hóa dữ liệu.',
    duration: '150 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=HPGYTWYM13s', // Statistics Tutorial - NumPy Regression Analysis
    imageUrl: 'https://i.ytimg.com/vi/HPGYTWYM13s/hqdefault.jpg',
    mainContent: {
      introduction:
        'Khoa học dữ liệu là nghệ thuật và khoa học của việc biến dữ liệu thô thành những hiểu biết sâu sắc, những quyết định thông minh và những sản phẩm đột phá. Đây không chỉ là về những thuật toán phức tạp, mà là về tư duy tò mò, khả năng kể chuyện và niềm đam mê giải quyết vấn đề. Bài học này sẽ là cánh cửa đầu tiên đưa bạn vào thế giới hấp dẫn của dữ liệu.',
      keyConcepts: [
        {
          title: 'Quy trình Khoa học Dữ liệu (Data Science Lifecycle)',
          description:
            'Một dự án khoa học dữ liệu điển hình tuân theo một quy trình có cấu trúc, thường bao gồm: Hiểu bài toán kinh doanh -> Thu thập dữ liệu -> Làm sạch và chuẩn bị dữ liệu -> Khám phá dữ liệu (EDA) -> Xây dựng mô hình -> Đánh giá mô hình -> Triển khai.',
          examples: ['Sử dụng mô hình CRISP-DM để quản lý một dự án dự đoán khách hàng rời bỏ.'],
        },
        {
          title: 'Làm sạch dữ liệu (Data Cleaning)',
          description:
            'Dữ liệu trong thế giới thực luôn lộn xộn. "Garbage in, garbage out." Giai đoạn này chiếm tới 80% thời gian của một nhà khoa học dữ liệu, bao gồm việc xử lý các giá trị bị thiếu, các giá trị ngoại lai, dữ liệu không nhất quán và trùng lặp.',
          examples: [
            'Điền các giá trị tuổi bị thiếu bằng giá trị trung bình.',
            'Loại bỏ các đơn hàng có giá trị bằng 0.',
          ],
        },
        {
          title: 'Phân tích dữ liệu khám phá (Exploratory Data Analysis - EDA)',
          description:
            'Đây là quá trình "trò chuyện" với dữ liệu bằng cách sử dụng các công cụ thống kê và trực quan hóa để tìm ra các mẫu, các mối quan hệ và các insight ban đầu. EDA giúp bạn hiểu sâu hơn về dữ liệu trước khi xây dựng mô hình.',
          examples: [
            'Vẽ biểu đồ phân phối doanh thu để xem xu hướng theo thời gian.',
            'Tạo ma trận tương quan để xem các yếu tố nào ảnh hưởng đến giá nhà.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Kinh doanh và Marketing',
          description:
            'Phân khúc khách hàng để đưa ra các chiến dịch marketing được cá nhân hóa, dự báo doanh thu, và tối ưu hóa giá bán.',
        },
        {
          area: 'Tài chính',
          description:
            'Phát hiện gian lận thẻ tín dụng, đánh giá rủi ro tín dụng, và dự đoán xu hướng thị trường chứng khoán.',
        },
        {
          area: 'Y tế',
          description:
            'Chẩn đoán bệnh sớm từ hình ảnh y tế, dự đoán nguy cơ bùng phát dịch bệnh, và cá nhân hóa phác đồ điều trị.',
        },
      ],
      conclusion:
        'Khoa học dữ liệu là một trong những lĩnh vực có sức ảnh hưởng lớn nhất trong thế kỷ 21. Bằng cách nắm vững các nguyên tắc cơ bản, bạn không chỉ mở ra một con đường sự nghiệp đầy hứa hẹn mà còn có khả năng sử dụng dữ liệu để tạo ra những tác động tích cực cho thế giới.',
    },
    relatedGames: [
      {
        id: 'data-visualizer-3d',
        name: 'Data Visualizer 3D',
        description:
          'Explore and visualize complex datasets in interactive 3D environments, uncovering insights and trends',
      },
      {
        id: 'data-detective',
        name: 'Data Detective: The Missing Shipment',
        description: 'Use your data analysis skills to solve a mystery and find a missing shipment.',
      },
    ],
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
        videoUrl: 'https://www.youtube.com/watch?v=lV6fNwKjA8A',
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
    vietnamContext: {
      title: 'Khoa học Dữ liệu tại Việt Nam: Cơ hội và Thách thức',
      content: [
        'Nhu cầu nhân lực Khoa học Dữ liệu tại Việt Nam đang bùng nổ, đặc biệt trong các lĩnh vực như E-commerce (Tiki, Shopee), FinTech (MoMo, VNPay), và Viễn thông (Viettel, FPT).',
        'FPT Software và Viettel AI là hai trong số các đơn vị tiên phong tại Việt Nam trong việc nghiên cứu và ứng dụng AI và Khoa học Dữ liệu, đặc biệt là trong xử lý ngôn ngữ tự nhiên tiếng Việt và nhận dạng hình ảnh.',
        'Các cuộc thi về Khoa học Dữ liệu như Zalo AI Challenge thu hút hàng ngàn sinh viên và kỹ sư tham gia, thúc đẩy cộng đồng và tìm kiếm tài năng.',
        'Thách thức lớn nhất là chất lượng và sự sẵn có của dữ liệu. Nhiều doanh nghiệp Việt Nam vẫn đang trong giai đoạn đầu của việc số hóa, khiến dữ liệu bị phân mảnh và thiếu nhất quán.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Mạnh Tường',
      title: 'Phó Tổng Giám đốc, Khối Zalo',
      company: 'VNG Corporation',
      imageUrl: 'https://i.ytimg.com/vi/lV6fNwKjA8A/hqdefault.jpg',
      quote:
        'Dữ liệu giống như dầu mỏ của thế kỷ 21, và các nhà khoa học dữ liệu là những người kỹ sư lọc dầu. Tại Zalo, chúng tôi không chỉ ngồi trên một mỏ dữ liệu khổng lồ, mà còn phải biến nó thành những sản phẩm thông minh, hữu ích cho hàng chục triệu người dùng mỗi ngày.',
    },
    quizzes: [
      {
        question: 'Giai đoạn nào thường chiếm nhiều thời gian nhất trong một dự án khoa học dữ liệu?',
        options: ['Xây dựng mô hình', 'Làm sạch và chuẩn bị dữ liệu', 'Trình bày kết quả', 'Hiểu bài toán kinh doanh'],
        correctAnswerIndex: 1,
        explanation:
          'Dữ liệu trong thực tế thường rất "bẩn", thiếu sót và không nhất quán. Việc làm sạch và chuẩn bị dữ liệu là bước cực kỳ quan trọng để đảm bảo mô hình hoạt động chính xác, và nó thường chiếm tới 80% thời gian của dự án.',
      },
      {
        question: 'EDA (Exploratory Data Analysis) là viết tắt của cụm từ gì và mục đích của nó là gì?',
        options: [
          'Phân tích Dữ liệu Mở rộng - Để mở rộng bộ dữ liệu',
          'Phân tích Dữ liệu Khám phá - Để hiểu rõ hơn về dữ liệu, tìm ra các mẫu và mối quan hệ ban đầu',
          'Đánh giá Dữ liệu Chính xác - Để kiểm tra độ chính xác của dữ liệu',
          'Thực thi Dữ liệu Tự động - Để tự động hóa quy trình',
        ],
        correctAnswerIndex: 1,
        explanation:
          'EDA là bước "làm quen" và "trò chuyện" với dữ liệu. Bằng cách sử dụng các công cụ thống kê và trực quan hóa, nhà khoa học dữ liệu có thể khám phá các đặc điểm, phát hiện các điểm bất thường và hình thành các giả thuyết ban đầu.',
      },
    ],
  },
  {
    id: 'machine-learning-algorithms',
    title: 'Machine Learning Algorithms',
    description: 'Học các thuật toán machine learning phổ biến và cách áp dụng trong thực tế.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=E0Hmnixke2g',
    imageUrl: 'https://i.ytimg.com/vi/E0Hmnixke2g/hqdefault.jpg',
    mainContent: {
      introduction:
        'Học máy (Machine Learning) là trái tim của khoa học dữ liệu, là nơi các thuật toán "học" từ dữ liệu để đưa ra dự đoán hoặc quyết định mà không cần được lập trình một cách rõ ràng. Bài học này sẽ đưa bạn vào thế giới của các thuật toán, từ những mô hình đơn giản đến các mạng nơ-ron phức tạp, và cách áp dụng chúng để giải quyết các bài toán thực tế.',
      keyConcepts: [
        {
          title: 'Các loại Học máy (Types of Machine Learning)',
          description:
            'Hiểu rõ ba loại chính: Học có giám sát (Supervised Learning) - học từ dữ liệu đã được gán nhãn; Học không giám sát (Unsupervised Learning) - tự tìm ra cấu trúc trong dữ liệu chưa được gán nhãn; và Học tăng cường (Reinforcement Learning) - học thông qua thử và sai.',
          examples: [
            'Dự đoán giá nhà (Supervised).',
            'Phân nhóm khách hàng (Unsupervised).',
            'Huấn luyện một AI chơi cờ (Reinforcement).',
          ],
        },
        {
          title: 'Đánh đổi giữa Độ chệch và Phương sai (Bias-Variance Tradeoff)',
          description:
            'Đây là một khái niệm cốt lõi trong việc xây dựng mô hình. Một mô hình có độ chệch cao (high bias) quá đơn giản và không nắm bắt được quy luật (underfitting). Một mô hình có phương sai cao (high variance) quá phức tạp và học cả nhiễu trong dữ liệu (overfitting). Mục tiêu là tìm ra sự cân bằng hoàn hảo.',
          examples: [
            'Một mô hình đường thẳng để dự đoán giá nhà có thể bị underfitting.',
            'Một mô hình đa thức bậc cao có thể bị overfitting.',
          ],
        },
        {
          title: 'Đánh giá và Lựa chọn Mô hình (Model Evaluation and Selection)',
          description:
            'Làm thế nào để biết mô hình của bạn có tốt không? Học cách sử dụng các chỉ số đánh giá phù hợp (như Accuracy, Precision, Recall, F1-score cho bài toán phân loại; MAE, RMSE cho bài toán hồi quy) và các kỹ thuật như kiểm tra chéo (cross-validation) để chọn ra mô hình tốt nhất.',
          examples: [
            'Sử dụng cross-validation để so sánh hiệu suất của mô hình Random Forest và Support Vector Machine.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Hệ thống gợi ý (Recommendation Engines)',
          description:
            'Các thuật toán học máy phân tích hành vi của bạn để gợi ý sản phẩm trên Amazon, phim trên Netflix, hoặc bài hát trên Spotify.',
        },
        {
          area: 'Xử lý ngôn ngữ tự nhiên (NLP)',
          description:
            'Phân tích cảm xúc của các bình luận trên mạng xã hội, dịch tự động, và tạo ra các chatbot thông minh.',
        },
        {
          area: 'Thị giác máy tính (Computer Vision)',
          description: 'Nhận diện khuôn mặt để mở khóa điện thoại, xe tự lái, và chẩn đoán y tế qua hình ảnh.',
        },
      ],
      conclusion:
        'Các thuật toán học máy là những công cụ mạnh mẽ có khả năng biến đổi mọi ngành công nghiệp. Bằng cách hiểu sâu về cách chúng hoạt động, ưu và nhược điểm của từng loại, bạn sẽ có khả năng lựa chọn và áp dụng đúng công cụ cho đúng bài toán, tạo ra những giải pháp thông minh và hiệu quả.',
    },
    relatedGames: [
      {
        id: 'ai-algorithm-arena-3d',
        name: 'AI Algorithm Arena 3D',
        description:
          'Visualize and interact with machine learning algorithms in a 3D space, understanding how they work',
      },
    ],
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
        videoUrl: 'https://www.youtube.com/watch?v=DsAjwVu092U',
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
    vietnamContext: {
      title: 'Ứng dụng Học máy tại Việt Nam',
      content: [
        'Hệ thống gợi ý sản phẩm của Tiki, Shopee sử dụng học máy để cá nhân hóa trang chủ của từng người dùng, làm tăng đáng kể tỷ lệ chuyển đổi.',
        'VinAI (thuộc Vingroup) là một trong những đơn vị nghiên cứu hàng đầu về thị giác máy tính, ứng dụng trong xe tự lái Vinfast và hệ thống nhận diện khuôn mặt.',
        'Các ngân hàng như Techcombank, VPBank sử dụng mô hình học máy để đánh giá rủi ro tín dụng, giúp quá trình duyệt vay nhanh hơn và chính xác hơn.',
        'Thách thức: Việc xây dựng các mô hình học máy cho ngôn ngữ tiếng Việt (NLP) rất phức tạp do sự đa dạng về ngữ điệu, từ đồng âm, và "teen code".',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Bùi Hải Hưng',
      title: 'Tổng Giám đốc',
      company: 'VinAI',
      imageUrl: 'https://i.ytimg.com/vi/DsAjwVu092U/hqdefault.jpg',
      quote:
        'Trí tuệ nhân tạo không còn là khoa học viễn tưởng. Tại VinAI, chúng tôi đang biến những nghiên cứu AI đỉnh cao của thế giới thành những sản phẩm thực tế, giải quyết những bài toán của người Việt. Học máy là công cụ để chúng tôi thực hiện sứ mệnh đó.',
    },
    quizzes: [
      {
        question:
          'Học có giám sát (Supervised Learning) khác với học không giám sát (Unsupervised Learning) ở điểm nào?',
        options: [
          'Học có giám sát cần có người giám sát ngồi cạnh',
          'Học không giám sát không cần máy tính',
          'Học có giám sát sử dụng dữ liệu đã được gán nhãn (biết trước kết quả), trong khi học không giám sát tự tìm ra cấu trúc trong dữ liệu chưa được gán nhãn.',
          'Học không giám sát luôn cho kết quả tốt hơn.',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ví dụ của học có giám sát là dự đoán giá nhà (biết giá nhà trong quá khứ). Ví dụ của học không giám sát là phân nhóm khách hàng dựa trên hành vi mua sắm (chưa biết trước có những nhóm nào).',
      },
      {
        question: 'Overfitting (học quá khớp) xảy ra khi nào?',
        options: [
          'Khi mô hình quá đơn giản và không học được quy luật của dữ liệu.',
          'Khi mô hình quá phức tạp, học thuộc lòng cả nhiễu trong dữ liệu huấn luyện và hoạt động kém trên dữ liệu mới.',
          'Khi dữ liệu huấn luyện quá lớn.',
          'Khi mô hình hoạt động hoàn hảo trên cả dữ liệu huấn luyện và dữ liệu kiểm tra.',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Overfitting giống như một học sinh học vẹt, trả lời rất tốt các câu hỏi đã gặp nhưng không thể giải quyết các vấn đề mới. Đây là một trong những thách thức lớn nhất khi xây dựng mô hình học máy.',
      },
    ],
  },
  {
    id: 'big-data-analytics',
    title: 'Big Data Analytics',
    description: 'Làm việc với dữ liệu lớn sử dụng các công cụ và framework hiện đại.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dJA7k58zlA8',
    imageUrl: 'https://i.ytimg.com/vi/dJA7k58zlA8/hqdefault.jpg',
    mainContent: {
      introduction:
        'Khi dữ liệu trở nên quá lớn, quá nhanh, hoặc quá phức tạp để có thể xử lý bằng các công cụ truyền thống, chúng ta bước vào thế giới của Dữ liệu lớn (Big Data). Đây là lĩnh vực của việc xử lý và phân tích các tập dữ liệu khổng lồ để khám phá các mẫu hình và xu hướng ở quy mô vĩ mô. Bài học này sẽ giới thiệu cho bạn các công cụ và kiến trúc để chinh phục dữ liệu lớn.',
      keyConcepts: [
        {
          title: '3V của Dữ liệu lớn (Volume, Velocity, Variety)',
          description:
            'Đây là ba đặc tính định nghĩa Dữ liệu lớn. Volume (Khối lượng) - quy mô dữ liệu cực lớn. Velocity (Tốc độ) - dữ liệu được tạo ra và cần được xử lý với tốc độ cao. Variety (Sự đa dạng) - dữ liệu đến từ nhiều nguồn và có nhiều định dạng khác nhau (văn bản, hình ảnh, video, cảm biến).',
          examples: [
            'Dữ liệu giao dịch của một sàn thương mại điện tử (Volume).',
            'Dữ liệu từ các dòng tweet trên Twitter (Velocity).',
            'Dữ liệu từ các thiết bị IoT (Variety).',
          ],
        },
        {
          title: 'Hệ sinh thái Hadoop và Spark (Hadoop and Spark Ecosystem)',
          description:
            'Đây là hai trong số các framework phổ biến nhất để xử lý dữ liệu lớn. Hadoop, với HDFS để lưu trữ và MapReduce để xử lý, là nền tảng ban đầu. Spark là một công cụ thế hệ mới, nhanh hơn và linh hoạt hơn, có khả năng xử lý dữ liệu trong bộ nhớ (in-memory).',
          examples: [
            'Sử dụng Spark để xử lý và phân tích log web server hàng terabyte.',
            'Lưu trữ dữ liệu trên HDFS để đảm bảo khả năng chịu lỗi và mở rộng.',
          ],
        },
        {
          title: 'Xử lý theo lô và xử lý luồng (Batch vs. Stream Processing)',
          description:
            'Xử lý theo lô (Batch processing) là việc xử lý một khối lượng lớn dữ liệu tĩnh tại một thời điểm. Xử lý luồng (Stream processing) là việc xử lý dữ liệu liên tục ngay khi nó được tạo ra. Việc lựa chọn giữa hai phương pháp này phụ thuộc vào yêu cầu về độ trễ của bài toán.',
          examples: [
            'Chạy một báo cáo tổng kết doanh thu cuối ngày (Batch).',
            'Phát hiện gian lận thẻ tín dụng trong thời gian thực (Stream).',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Phân tích mạng xã hội',
          description:
            'Phân tích hàng tỷ bài đăng và tương tác để hiểu xu hướng dư luận, phát hiện tin giả, và đo lường hiệu quả chiến dịch marketing.',
        },
        {
          area: 'Internet Vạn vật (IoT)',
          description:
            'Phân tích dữ liệu từ hàng triệu cảm biến trong các thành phố thông minh, nhà máy thông minh, hoặc trên các thiết bị đeo để tối ưu hóa hoạt động và dự đoán sự cố.',
        },
        {
          area: 'Genomics',
          description:
            'Phân tích bộ gen người, một tập dữ liệu khổng lồ, để tìm ra các phương pháp điều trị bệnh được cá nhân hóa.',
        },
      ],
      conclusion:
        'Làm chủ dữ liệu lớn không chỉ là một thách thức về mặt kỹ thuật mà còn là một cơ hội chiến lược. Các tổ chức có khả năng khai thác sức mạnh của dữ liệu lớn sẽ có lợi thế cạnh tranh vượt trội, từ việc hiểu khách hàng sâu sắc hơn đến việc tạo ra các mô hình kinh doanh hoàn toàn mới.',
    },
    relatedGames: [
      {
        id: 'data-visualizer-3d',
        name: 'Data Visualizer 3D',
        description:
          'Explore and visualize complex datasets in interactive 3D environments, uncovering insights and trends',
      },
    ],
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
        videoUrl: 'https://www.youtube.com/watch?v=kGT4PcTEPP8',
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
    vietnamContext: {
      title: 'Dữ liệu lớn (Big Data) tại Việt Nam',
      content: [
        'Các công ty viễn thông như Viettel, Mobifone, Vinaphone đang quản lý những tập dữ liệu khổng lồ về thông tin thuê bao và lưu lượng mạng, là nguồn tài nguyên quý giá cho việc phân tích hành vi người dùng và quy hoạch hạ tầng.',
        'Thương mại điện tử và các siêu ứng dụng (super-apps) như Grab, Gojek tạo ra một lượng dữ liệu giao dịch và di chuyển khổng lồ mỗi ngày, được sử dụng để tối ưu hóa logistics, giá cả và gợi ý dịch vụ.',
        'VNG Cloud, Viettel IDC là những nhà cung cấp dịch vụ điện toán đám mây "made in Vietnam", cung cấp hạ tầng để các doanh nghiệp trong nước xử lý dữ liệu lớn mà không cần phụ thuộc vào các gã khổng lồ quốc tế.',
        'Thách thức: Việc đảm bảo an ninh, chủ quyền dữ liệu và tuân thủ Luật An ninh mạng là một bài toán phức tạp khi làm việc với dữ liệu lớn tại Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê Hồng Việt',
      title: 'Tổng Giám đốc',
      company: 'FPT Smart Cloud',
      imageUrl: 'https://i.ytimg.com/vi/kGT4PcTEPP8/hqdefault.jpg',
      quote:
        'Big Data không chỉ là về kích thước, mà là về tốc độ và sự đa dạng. Thách thức lớn nhất không phải là lưu trữ dữ liệu, mà là xử lý nó đủ nhanh để đưa ra quyết định kinh doanh trong thời gian thực. Tại FPT, chúng tôi xây dựng những "nhà máy" xử lý dữ liệu để giúp các doanh nghiệp Việt Nam tăng tốc trong cuộc đua chuyển đổi số.',
    },
    quizzes: [
      {
        question: 'Đặc tính nào sau đây KHÔNG phải là một trong 3V của Big Data?',
        options: ['Volume (Khối lượng)', 'Velocity (Tốc độ)', 'Variety (Sự đa dạng)', 'Value (Giá trị)'],
        correctAnswerIndex: 3,
        explanation:
          'Mặc dù "Value" (Giá trị) là mục tiêu cuối cùng của việc phân tích Big Data, 3V truyền thống định nghĩa các đặc tính của dữ liệu là Volume, Velocity, và Variety. Sau này, các V khác như Veracity (Tính xác thực) và Value đã được thêm vào để mở rộng khái niệm.',
      },
      {
        question: 'Apache Spark có ưu điểm chính gì so với Hadoop MapReduce?',
        options: [
          'Chỉ hoạt động với dữ liệu nhỏ',
          'Khả năng xử lý dữ liệu trong bộ nhớ (in-memory), giúp tốc độ nhanh hơn đáng kể',
          'Bảo mật kém hơn',
          'Chỉ viết được bằng ngôn ngữ Java',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Khả năng thực hiện các phép tính trong RAM thay vì phải đọc/ghi liên tục trên đĩa cứng như MapReduce giúp Spark có thể nhanh hơn gấp 10 đến 100 lần, đặc biệt với các thuật toán lặp lại như trong Machine Learning.',
      },
    ],
  },
  {
    id: 'data-visualization-storytelling',
    title: 'Data Visualization và Storytelling',
    description: 'Tạo ra các visualization hiệu quả và kể chuyện với dữ liệu.',
    duration: '140 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=r5_34YnCmMY',
    imageUrl: 'https://i.ytimg.com/vi/r5_34YnCmMY/hqdefault.jpg',
    mainContent: {
      introduction:
        'Những con số và bảng tính khô khan không thể tự nó kể chuyện. Trực quan hóa dữ liệu và Kể chuyện bằng dữ liệu là nghệ thuật biến những phân tích phức tạp thành những biểu đồ đẹp mắt, những câu chuyện hấp dẫn và những thông điệp rõ ràng, có sức thuyết phục. Đây là cây cầu nối giữa thế giới của nhà khoa học dữ liệu và thế giới của người ra quyết định.',
      keyConcepts: [
        {
          title: 'Lựa chọn biểu đồ phù hợp (Choosing the Right Chart)',
          description:
            'Mỗi loại biểu đồ có một mục đích riêng. Học cách chọn đúng loại biểu-đồ-để-thể-hiện-đúng-thông-điệp: biểu đồ cột để so sánh, biểu đồ đường để xem xu hướng, biểu đồ tròn để thể hiện tỷ lệ, và biểu đồ phân tán để xem mối quan hệ.',
          examples: [
            'Không dùng biểu đồ tròn khi có quá nhiều danh mục.',
            'Sử dụng biểu đồ đường để thể hiện sự thay đổi của giá cổ phiếu theo thời gian.',
          ],
        },
        {
          title: 'Nguyên tắc thiết kế trực quan (Visual Design Principles)',
          description:
            'Một biểu đồ hiệu quả phải sạch sẽ, rõ ràng và trung thực. Áp dụng các nguyên tắc như tối giản hóa (loại bỏ các yếu tố không cần thiết), sử dụng màu sắc một cách có chủ đích, và đảm bảo tỷ lệ dữ liệu trên mực (data-ink ratio) cao.',
          examples: [
            'Loại bỏ các đường lưới không cần thiết.',
            'Sử dụng một màu để làm nổi bật một điểm dữ liệu quan trọng.',
          ],
        },
        {
          title: 'Cấu trúc của một câu chuyện dữ liệu (Narrative Structure)',
          description:
            'Một câu chuyện dữ liệu hay cũng cần có cấu trúc như một bộ phim: Mở đầu (thiết lập bối cảnh và vấn đề), Thân bài (trình bày các phân tích, các khám phá, và cao trào), và Kết luận (đưa ra kết luận và lời kêu gọi hành động).',
          examples: [
            'Bắt đầu bằng một con số gây sốc.',
            'Dẫn dắt khán giả qua từng bước phân tích của bạn.',
            'Kết thúc bằng một đề xuất rõ ràng dựa trên dữ liệu.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Báo cáo kinh doanh (Business Reporting)',
          description:
            'Tạo ra các bảng điều khiển (dashboards) tương tác cho ban lãnh đạo, giúp họ theo dõi các chỉ số hiệu suất chính (KPIs) và ra quyết định nhanh chóng.',
        },
        {
          area: 'Báo chí dữ liệu (Data Journalism)',
          description:
            'Sử dụng các biểu đồ và bản đồ tương tác để kể những câu chuyện phức tạp về xã hội, kinh tế, chính trị một cách dễ hiểu và hấp dẫn.',
        },
        {
          area: 'Thuyết trình và Thuyết phục',
          description:
            'Sử dụng các biểu đồ mạnh mẽ để củng cố lập luận của bạn trong các buổi thuyết trình, thay vì chỉ trình bày các con số đơn thuần.',
        },
      ],
      conclusion:
        'Kể chuyện bằng dữ liệu là kỹ năng cuối cùng nhưng quan trọng nhất của một nhà khoa học dữ liệu. Đó là khả năng biến "dữ liệu" thành "tri thức" và "tri thức" thành "hành động". Người nào có thể kể những câu chuyện hay nhất từ dữ liệu sẽ là người có sức ảnh hưởng lớn nhất.',
    },
    relatedGames: [
      {
        id: 'data-visualizer-3d',
        name: 'Data Visualizer 3D',
        description:
          'Explore and visualize complex datasets in interactive 3D environments, uncovering insights and trends',
      },
    ],
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
        videoUrl: 'https://www.youtube.com/watch?v=MTlQvyNQ3PM',
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
    vietnamContext: {
      title: 'Kể chuyện bằng Dữ liệu trong bối cảnh Việt Nam',
      content: [
        'Các báo cáo kinh doanh tại Việt Nam thường bị chỉ trích là khô khan và đầy số liệu. Kỹ năng kể chuyện bằng dữ liệu giúp các nhà phân tích biến những con số đó thành những câu chuyện có ý nghĩa, thuyết phục được ban lãnh đạo.',
        'Trong các buổi thuyết trình gọi vốn (pitching), các startup Việt Nam thành công thường không chỉ trình bày số liệu mà còn kể một câu chuyện hấp dẫn về thị trường, vấn đề và giải pháp của họ bằng dữ liệu.',
        'Các công cụ như Power BI và Tableau đang ngày càng được ưa chuộng trong các doanh nghiệp Việt Nam, thay thế dần cho các báo cáo Excel truyền thống.',
        'Thách thức: Nhiều nhà quản lý ở Việt Nam vẫn quen với việc ra quyết định dựa trên kinh nghiệm và "cảm tính", đòi hỏi người trình bày phải có kỹ năng kể chuyện bằng dữ liệu cực kỳ thuyết phục để thay đổi văn hóa này.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Phi Vân',
      title: 'Chuyên gia nhượng quyền thương hiệu, Tác giả sách',
      company: 'Retail & Franchise Asia',
      imageUrl: 'https://i.ytimg.com/vi/MTlQvyNQ3PM/hqdefault.jpg',
      quote:
        'Dữ liệu không biết nói dối, nhưng nó cũng không tự biết kể chuyện. Một nhà lãnh đạo giỏi phải là một người kể chuyện giỏi, người có thể thổi hồn vào những con số, biến chúng thành một tầm nhìn, một chiến lược mà mọi người đều muốn đi theo. Đừng chỉ cho tôi biểu đồ, hãy kể cho tôi nghe câu chuyện đằng sau nó.',
    },
    quizzes: [
      {
        question: 'Mục tiêu chính của "kể chuyện bằng dữ liệu" (data storytelling) là gì?',
        options: [
          'Làm cho báo cáo trông đẹp hơn',
          'Sử dụng càng nhiều biểu đồ phức tạp càng tốt',
          'Trình bày dữ liệu một cách nhàm chán',
          'Truyền đạt những hiểu biết sâu sắc từ dữ liệu một cách rõ ràng, hấp dẫn và đáng nhớ để thúc đẩy hành động.',
        ],
        correctAnswerIndex: 3,
        explanation:
          'Kể chuyện bằng dữ liệu là sự kết hợp giữa khoa học (dữ liệu) và nghệ thuật (cách kể chuyện) để làm cho thông tin trở nên dễ hiểu, thuyết phục và có tác động mạnh mẽ đến người nghe.',
      },
      {
        question: 'Để so sánh doanh thu giữa các vùng miền khác nhau, loại biểu đồ nào là phù hợp nhất?',
        options: [
          'Biểu đồ đường (Line chart)',
          'Biểu đồ tròn (Pie chart)',
          'Biểu đồ cột (Bar chart)',
          'Biểu đồ phân tán (Scatter plot)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Biểu đồ cột rất hiệu quả trong việc so sánh các giá trị giữa các danh mục riêng biệt (như các vùng miền). Biểu đồ đường dùng cho xu hướng theo thời gian, biểu đồ tròn cho tỷ lệ phần trăm, và biểu đồ phân tán cho mối quan hệ giữa hai biến số.',
      },
    ],
  },
];
