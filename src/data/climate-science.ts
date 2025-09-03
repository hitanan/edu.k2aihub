import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface VietnamContext {
  title: string;
  content: string[];
}

export interface CareerConnect {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ClimateLessonData extends BaseLessonData {
  climateConcepts?: string[];
  researchMethods?: string[];
  climateData?: Array<{
    source: string;
    type: string;
    description: string;
    accessibility: string;
  }>;
  vietnamContext?: VietnamContext;
  careerConnect?: CareerConnect;
  quizzes?: Quiz[];
}

export const ClimateLessons: ClimateLessonData[] = [
  {
    id: 'climate-science-fundamentals',
    title: 'Cơ bản về Khoa học Khí hậu',
    description: 'Tìm hiểu các nguyên lý cơ bản của hệ thống khí hậu Trái Đất và biến đổi khí hậu.',
    duration: '140 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=AIkI_nPkZJ4',
    imageUrl: '/images/climate-fundamentals.jpg',
    objectives: [
      'Hiểu hệ thống khí hậu Trái Đất và các thành phần',
      'Nắm vững hiệu ứng nhà kính và bức xạ',
      'Tìm hiểu các yếu tố gây biến đổi khí hậu',
      'Phân tích dữ liệu khí hậu cơ bản',
    ],
    prerequisites: ['Vật lý đại cương', 'Hóa học cơ bản', 'Toán học cấp 3', 'Địa lý tự nhiên'],
    exercises: [
      {
        title: 'Phân tích dữ liệu nhiệt độ toàn cầu',
        description: 'Sử dụng Python để phân tích xu hướng nhiệt độ từ dataset NASA GISS',
        difficulty: 'Cơ bản',
        materials: ['Python', 'pandas', 'matplotlib', 'numpy', 'NASA GISS dataset'],
        procedure: [
          'Download dữ liệu nhiệt độ từ NASA GISS Surface Temperature',
          'Load data với pandas và clean missing values',
          'Tính temperature anomalies theo base period 1951-1980',
          'Tạo time series plot cho global temperature trend',
          'Tính linear regression để xác định warming rate',
          'Visualize seasonal variations',
          'So sánh regional vs global trends',
        ],
        expectedResults: 'Phát hiện xu hướng tăng nhiệt độ toàn cầu ~1.1°C từ thời kỳ tiền công nghiệp',
        solution:
          '# Climate Data Analysis\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy import stats\n\n# Load NASA GISS temperature data\nurl = "https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv"\ndf = pd.read_csv(url, skiprows=1)\n\n# Clean and prepare data\ndf = df[df["Year"] >= 1880]  # Reliable data from 1880\ndf["AnnualMean"] = df[["Jan", "Feb", "Mar", "Apr", "May", "Jun", \n                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]].mean(axis=1)\n\n# Calculate temperature anomalies (base: 1951-1980)\nbase_period = df[(df["Year"] >= 1951) & (df["Year"] <= 1980)]\nbaseline = base_period["AnnualMean"].mean()\ndf["Anomaly"] = df["AnnualMean"] - baseline\n\n# Linear regression for trend\nslope, intercept, r_value, p_value, std_err = stats.linregress(df["Year"], df["Anomaly"])\nprint(f"Warming rate: {slope:.3f}°C per decade")\nprint(f"R-squared: {r_value**2:.3f}")\n\n# Plotting\nfig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 10))\n\n# Temperature anomaly trend\nax1.plot(df["Year"], df["Anomaly"], alpha=0.7, color="blue", label="Annual")\nax1.plot(df["Year"], slope * df["Year"] + intercept, "r-", label=f"Trend: {slope:.3f}°C/decade")\nax1.axhline(y=0, color="black", linestyle="--", alpha=0.5)\nax1.set_ylabel("Temperature Anomaly (°C)")\nax1.set_title("Global Temperature Anomalies (1880-2023)")\nax1.legend()\nax1.grid(True, alpha=0.3)\n\n# Recent decades comparison\nrecent_30yr = df[df["Year"] >= 1994]["Anomaly"].mean()\nearly_30yr = df[(df["Year"] >= 1880) & (df["Year"] <= 1909)]["Anomaly"].mean()\ndifference = recent_30yr - early_30yr\n\nax2.bar(["1880-1909", "1994-2023"], [early_30yr, recent_30yr], \n        color=["lightblue", "red"], alpha=0.7)\nax2.set_ylabel("Average Temperature Anomaly (°C)")\nax2.set_title(f"30-Year Average Comparison\\nDifference: {difference:.2f}°C")\nax2.axhline(y=0, color="black", linestyle="--", alpha=0.5)\n\nplt.tight_layout()\nplt.show()\n\n# Key statistics\nprint(f"\\nKey Climate Statistics:")\nprint(f"Temperature increase since 1880: {df.iloc[-1][\"Anomaly\"] - df.iloc[0][\"Anomaly\"]:.2f}°C")\nprint(f"Warmest year on record: {df.loc[df[\"Anomaly\"].idxmax(), \"Year\"]} ({df[\"Anomaly\"].max():.2f}°C)")\nprint(f"Number of years above 1°C warming: {len(df[df[\"Anomaly\"] > 1.0])}")',
      },
    ],
    realWorldApplications: [
      'Weather forecasting và climate modeling',
      'Agriculture planning và crop selection',
      'Water resource management',
      'Disaster preparedness và early warning',
      'Urban planning cho climate adaptation',
    ],
    caseStudies: [
      {
        title: 'IPCC Climate Assessment Reports',
        organization: 'Intergovernmental Panel on Climate Change',
        problem: 'Synthesize global climate science for policymakers',
        solution: 'Comprehensive assessment của climate data và projections',
        impact: 'Fundamental basis cho Paris Agreement và climate policy',
        innovations: ['Multi-model ensembles', 'Uncertainty quantification', 'Regional downscaling'],
      },
    ],
    climateConcepts: [
      'Greenhouse Effect',
      'Radiative Forcing',
      'Climate Feedbacks',
      'Carbon Cycle',
      'Ocean Circulation',
    ],
    vietnamContext: {
      title: 'Tác động của Biến đổi Khí hậu tại Việt Nam',
      content: [
        'Đồng bằng sông Cửu Long, vựa lúa của Việt Nam, đang đối mặt với nguy cơ ngập lụt nghiêm trọng do nước biển dâng và sụt lún đất.',
        'Các hiện tượng thời tiết cực đoan như bão, lũ lụt, và hạn hán ngày càng gia tăng về tần suất và cường độ, ảnh hưởng đến nông nghiệp và đời sống người dân.',
        'Nhiệt độ tăng cao làm thay đổi hệ sinh thái, đe dọa đa dạng sinh học tại các vườn quốc gia và khu bảo tồn.',
        'Chính phủ Việt Nam đã cam kết đạt mức phát thải ròng bằng "0" vào năm 2050 tại COP26, thúc đẩy mạnh mẽ quá trình chuyển đổi sang năng lượng tái tạo.',
      ],
    },
    careerConnect: {
      name: 'Tiến sĩ Trần Thị Mai',
      title: 'Chuyên gia Nghiên cứu Khí hậu',
      company: 'Viện Khoa học Khí tượng Thủy văn và Biến đổi khí hậu',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-thi-mai',
      quote:
        'Nghiên cứu khoa học khí hậu tại Việt Nam không chỉ là công việc mà là sứ mệnh. Dữ liệu chúng tôi thu thập và phân tích giúp chính phủ và người dân có những chiến lược ứng phó hiệu quả, bảo vệ tương lai của đất nước trước những thách thức khí hậu.',
    },
    quizzes: [
      {
        question: 'Hiệu ứng nhà kính là gì?',
        options: [
          'Là hiện tượng Trái Đất nóng lên do mặt trời',
          'Là quá trình các khí trong khí quyển giữ lại nhiệt của Mặt Trời',
          'Là sự thay đổi nhiệt độ theo mùa',
          'Là sự nóng lên của các đại dương',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hiệu ứng nhà kính là quá trình tự nhiên giữ cho bề mặt Trái Đất ấm hơn. Các khí nhà kính như CO2, CH4 bẫy nhiệt từ Mặt Trời, ngăn không cho nó thoát ra ngoài không gian.',
      },
      {
        question: 'Đâu là một trong những tác động chính của biến đổi khí hậu tại Việt Nam?',
        options: [
          'Tuyết rơi nhiều hơn ở Sa Pa',
          'Nước biển dâng ở Đồng bằng sông Cửu Long',
          'Giảm số lượng các cơn bão',
          'Mùa đông lạnh hơn ở Hà Nội',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Việt Nam là một trong những quốc gia bị ảnh hưởng nặng nề nhất bởi biến đổi khí hậu, đặc biệt là hiện tượng nước biển dâng gây ngập lụt và nhiễm mặn ở các vùng ven biển như Đồng bằng sông Cửu Long.',
      },
    ],
  },
  {
    id: 'climate-modeling-data',
    title: 'Climate Modeling và Big Data',
    description: 'Học cách sử dụng các mô hình khí hậu và phân tích big data để dự báo khí hậu.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=gJd-Ohf1FfM',
    objectives: [
      'Hiểu các loại climate models: GCM, RCM, ESM',
      'Nắm vững data assimilation và ensemble methods',
      'Sử dụng satellite data để monitor climate',
      'Thực hành với climate datasets và APIs',
    ],
    prerequisites: [
      'Climate science fundamentals',
      'Python programming',
      'Statistics và data analysis',
      'Numerical methods',
    ],
    exercises: [
      {
        title: 'Climate Model Ensemble Analysis',
        description: 'Phân tích projections từ nhiều climate models để đánh giá uncertainty',
        difficulty: 'Nâng cao',
        materials: ['Python', 'xarray', 'netCDF4', 'cartopy', 'CMIP6 data'],
        procedure: [
          'Access CMIP6 model data qua Earth System Grid Federation',
          'Load multiple model outputs với xarray',
          'Calculate ensemble mean và spread cho temperature',
          'Analyze regional vs global projection differences',
          'Quantify model agreement và uncertainty',
          'Create visualization với confidence intervals',
          'Identify climate hotspots với high uncertainty',
        ],
        expectedResults: 'Comprehensive analysis của climate projection uncertainty',
        solution:
          '# Climate Model Ensemble Analysis\nimport xarray as xr\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport cartopy.crs as ccrs\nimport cartopy.feature as cfeature\nfrom cartopy.mpl.ticker import LongitudeFormatter, LatitudeFormatter\n\n# Load CMIP6 model ensemble data\n# This example uses pre-processed ensemble data\ndef load_cmip6_ensemble():\n    # In practice, you would load from multiple model files\n    # Here we simulate ensemble data\n    models = ["CESM2", "GFDL-ESM4", "MPI-ESM1-2-HR", "UKESM1-0-LL"]\n    \n    # Simulate temperature change data (2081-2100 vs 1995-2014)\n    lat = np.linspace(-90, 90, 180)\n    lon = np.linspace(-180, 180, 360)\n    \n    ensemble_data = []\n    for i, model in enumerate(models):\n        # Simulate model-specific warming patterns\n        temp_change = np.random.normal(2.5 + i*0.3, 0.5, (len(lat), len(lon)))\n        # Add realistic spatial patterns\n        lat_grid, lon_grid = np.meshgrid(lat, lon, indexing="ij")\n        temp_change += 1.5 * np.cos(np.radians(lat_grid))**2  # Arctic amplification\n        \n        da = xr.DataArray(\n            temp_change,\n            coords={"lat": lat, "lon": lon},\n            dims=["lat", "lon"],\n            name=f"tas_change_{model}"\n        )\n        ensemble_data.append(da)\n    \n    return xr.concat(ensemble_data, dim="model")\n\n# Load ensemble data\nensemble = load_cmip6_ensemble()\n\n# Calculate ensemble statistics\nensemble_mean = ensemble.mean(dim="model")\nensemble_std = ensemble.std(dim="model")\nmodel_agreement = (ensemble > 0).sum(dim="model") / len(ensemble.model)\n\n# Create visualization\nfig = plt.figure(figsize=(15, 12))\n\n# Ensemble mean temperature change\nax1 = plt.subplot(2, 2, 1, projection=ccrs.PlateCarree())\nim1 = ax1.contourf(ensemble_mean.lon, ensemble_mean.lat, ensemble_mean, \n                   levels=np.linspace(0, 6, 13), cmap="RdYlBu_r", \n                   transform=ccrs.PlateCarree())\nax1.add_feature(cfeature.COASTLINE)\nax1.add_feature(cfeature.BORDERS)\nax1.set_global()\nax1.set_title("Ensemble Mean Temperature Change (°C)")\ncbar1 = plt.colorbar(im1, ax=ax1, shrink=0.6)\n\n# Ensemble standard deviation (uncertainty)\nax2 = plt.subplot(2, 2, 2, projection=ccrs.PlateCarree())\nim2 = ax2.contourf(ensemble_std.lon, ensemble_std.lat, ensemble_std,\n                   levels=np.linspace(0, 2, 11), cmap="viridis",\n                   transform=ccrs.PlateCarree())\nax2.add_feature(cfeature.COASTLINE)\nax2.add_feature(cfeature.BORDERS)\nax2.set_global()\nax2.set_title("Ensemble Standard Deviation (°C)")\ncbar2 = plt.colorbar(im2, ax=ax2, shrink=0.6)\n\n# Model agreement\nax3 = plt.subplot(2, 2, 3, projection=ccrs.PlateCarree())\nim3 = ax3.contourf(model_agreement.lon, model_agreement.lat, model_agreement,\n                   levels=np.linspace(0, 1, 11), cmap="RdYlGn",\n                   transform=ccrs.PlateCarree())\nax3.add_feature(cfeature.COASTLINE)\nax3.add_feature(cfeature.BORDERS)\nax3.set_global()\nax3.set_title("Model Agreement (fraction agreeing on warming)")\ncbar3 = plt.colorbar(im3, ax=ax3, shrink=0.6)\n\n# Regional analysis\nax4 = plt.subplot(2, 2, 4)\n# Arctic vs Tropical warming\narctic_warming = ensemble.sel(lat=slice(70, 90)).mean(dim=["lat", "lon"])\ntropical_warming = ensemble.sel(lat=slice(-20, 20)).mean(dim=["lat", "lon"])\n\nax4.boxplot([arctic_warming.values, tropical_warming.values], \n           labels=["Arctic (70-90°N)", "Tropics (20°S-20°N)"])\nax4.set_ylabel("Temperature Change (°C)")\nax4.set_title("Regional Warming Comparison")\nax4.grid(True, alpha=0.3)\n\nplt.tight_layout()\nplt.show()\n\n# Print summary statistics\nprint("Climate Model Ensemble Analysis Summary:")\nprint(f"Global mean warming: {ensemble_mean.mean().values:.2f} ± {ensemble_std.mean().values:.2f}°C")\nprint(f"Arctic amplification factor: {arctic_warming.mean().values / tropical_warming.mean().values:.2f}")\nprint(f"High agreement regions (>80%): {(model_agreement > 0.8).sum().values / model_agreement.size * 100:.1f}% of globe")',
      },
    ],
    realWorldApplications: [
      'Seasonal weather forecasting',
      'Climate impact assessment cho infrastructure',
      'Agricultural yield predictions',
      'Water resource planning',
      'Extreme weather risk assessment',
    ],
    researchMethods: [
      'Ensemble forecasting',
      'Data assimilation',
      'Downscaling techniques',
      'Bias correction',
      'Uncertainty quantification',
    ],
    vietnamContext: {
      title: 'Ứng dụng Big Data và AI trong dự báo khí hậu ở Việt Nam',
      content: [
        'Trung tâm Dự báo Khí tượng Thủy văn Quốc gia sử dụng các mô hình số và dữ liệu lớn để đưa ra các bản tin dự báo thiên tai sớm, giúp giảm thiểu thiệt hại.',
        'Các công ty công nghệ Việt Nam như FPT đang phát triển các giải pháp AI để phân tích dữ liệu vệ tinh, giúp giám sát sức khỏe cây trồng và tối ưu hóa việc sử dụng nước trong nông nghiệp.',
        'Dữ liệu từ các trạm quan trắc tự động và cảm biến IoT được tích hợp để xây dựng các mô hình cảnh báo sớm về lũ lụt và sạt lở đất tại các tỉnh miền núi.',
        'Sinh viên và nhà nghiên cứu tại các trường đại học như Đại học Bách khoa Hà Nội đang tích cực tham gia các dự án mã nguồn mở về mô hình hóa khí hậu, đóng góp vào nỗ lực chung toàn cầu.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Thành Trung',
      title: 'Kỹ sư Dữ liệu Khí hậu',
      company: 'The Weather Company (An IBM Business)',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thanh-trung',
      quote:
        'Làm việc với big data trong ngành khí hậu là một trải nghiệm tuyệt vời. Chúng tôi xử lý hàng terabyte dữ liệu mỗi ngày từ vệ tinh, radar, và các mô hình dự báo để cung cấp thông tin thời tiết chính xác cho hàng triệu người dùng. Kỹ năng lập trình Python, xử lý dữ liệu lớn và kiến thức về khoa học khí hậu là chìa khóa thành công.',
    },
    quizzes: [
      {
        question: 'CMIP6 là viết tắt của gì?',
        options: [
          'Climate Model Intercomparison Project Phase 6',
          'Climate Measurement and Investigation Program 6',
          'Comprehensive Meteorological Information Protocol 6',
          'Coastal Monitoring and Integration Project 6',
        ],
        correctAnswerIndex: 0,
        explanation:
          'CMIP6 (Coupled Model Intercomparison Project Phase 6) là một dự án hợp tác toàn cầu nhằm so sánh các mô hình khí hậu, là nền tảng cho các báo cáo của IPCC.',
      },
      {
        question: 'Kỹ thuật "downscaling" trong mô hình khí hậu dùng để làm gì?',
        options: [
          'Giảm độ phức tạp của mô hình',
          'Tăng độ phân giải của dự báo cho một khu vực cụ thể',
          'Giảm lượng dữ liệu đầu ra',
          'Chạy mô hình trên máy tính yếu hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Downscaling là một tập hợp các kỹ thuật cho phép chuyển đổi thông tin từ các mô hình khí hậu toàn cầu (GCMs) có độ phân giải thấp sang độ phân giải cao hơn cho các nghiên cứu tác động ở quy mô khu vực hoặc địa phương.',
      },
    ],
  },
  {
    id: 'climate-solutions-tech',
    title: 'Climate Solutions và Green Technology',
    description: 'Khám phá các giải pháp công nghệ để giảm thiểu và thích ứng với biến đổi khí hậu.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu renewable energy technologies',
      'Nắm vững carbon capture và storage',
      'Tìm hiểu geoengineering approaches',
      'Đánh giá lifecycle assessment của green technologies',
    ],
    prerequisites: ['Climate science basics', 'Engineering fundamentals', 'Environmental science'],
    exercises: [
      {
        title: 'Renewable Energy System Design',
        description: 'Thiết kế hệ thống năng lượng tái tạo cho một thành phố nhỏ',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích energy demand patterns',
          'Đánh giá solar và wind resources',
          'Design hybrid renewable system',
          'Calculate battery storage requirements',
          'Estimate costs và payback period',
          'Assess environmental impact',
          'Compare với fossil fuel alternatives',
        ],
      },
    ],
    realWorldApplications: [
      'Smart grid integration',
      'Electric vehicle infrastructure',
      'Carbon capture facilities',
      'Sustainable agriculture',
      'Green building design',
    ],
    vietnamContext: {
      title: 'Phát triển Công nghệ Xanh tại Việt Nam',
      content: [
        'Việt Nam là một trong những quốc gia dẫn đầu Đông Nam Á về phát triển điện mặt trời và điện gió, với nhiều dự án lớn tại Ninh Thuận, Bình Thuận.',
        'VinFast, nhà sản xuất ô tô Việt Nam, đang tiên phong trong việc sản xuất xe điện, góp phần vào quá trình chuyển đổi giao thông xanh.',
        'Các tòa nhà "xanh" đạt chứng chỉ LEED hoặc LOTUS ngày càng phổ biến tại các thành phố lớn như TP.HCM và Hà Nội, giúp tiết kiệm năng lượng và giảm tác động môi trường.',
        'Nhiều startup Việt Nam đang nghiên cứu và phát triển các giải pháp công nghệ cao trong nông nghiệp bền vững, như hệ thống tưới tiêu thông minh và nông nghiệp hữu cơ.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Thị Thu Hà',
      title: 'Giám đốc Dự án Năng lượng Tái tạo',
      company: 'Tập đoàn Trung Nam (Trungnam Group)',
      imageUrl: 'https://i.pravatar.cc/150?u=le-thi-thu-ha',
      quote:
        'Phát triển các dự án điện gió và mặt trời tại Việt Nam là một hành trình đầy thách thức nhưng cũng rất tự hào. Chúng tôi không chỉ tạo ra năng lượng sạch mà còn tạo ra việc làm và đóng góp vào an ninh năng lượng quốc gia. Đây là một lĩnh vực đòi hỏi sự kết hợp giữa kỹ thuật, tài chính và quản lý.',
    },
    quizzes: [
      {
        question: 'Công nghệ Carbon Capture, Utilization, and Storage (CCUS) nhằm mục đích gì?',
        options: [
          'Tạo ra carbon',
          'Thu giữ CO2 từ các nguồn phát thải và lưu trữ nó để không thải vào khí quyển',
          'Chuyển đổi CO2 thành oxy',
          'Sử dụng CO2 để làm mát',
        ],
        correctAnswerIndex: 1,
        explanation:
          'CCUS là một bộ các công nghệ nhằm thu giữ khí CO2 từ các nguồn phát thải lớn (như nhà máy điện, khu công nghiệp), sau đó vận chuyển và lưu trữ nó dưới lòng đất hoặc sử dụng trong các quy trình công nghiệp khác.',
      },
      {
        question: 'Đâu là một lợi thế của năng lượng mặt trời?',
        options: [
          'Hoạt động được cả ngày lẫn đêm',
          'Chi phí lắp đặt ban đầu rất thấp',
          'Là nguồn năng lượng tái tạo và không phát thải khí nhà kính khi hoạt động',
          'Không phụ thuộc vào điều kiện thời tiết',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Năng lượng mặt trời là một nguồn năng lượng sạch, tái tạo, và không tạo ra khí nhà kính trong quá trình vận hành. Tuy nhiên, nó phụ thuộc vào ánh sáng mặt trời và có chi phí đầu tư ban đầu.',
      },
    ],
  },
  {
    id: 'climate-policy-economics',
    title: 'Climate Policy và Economics',
    description: 'Tìm hiểu các chính sách khí hậu và khía cạnh kinh tế của biến đổi khí hậu.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu carbon pricing mechanisms',
      'Nắm vững climate finance và green bonds',
      'Tìm hiểu international climate agreements',
      'Đánh giá economic impacts của climate change',
    ],
    prerequisites: ['Economics basics', 'Climate science understanding', 'Policy analysis'],
    exercises: [
      {
        title: 'Carbon Footprint Analysis',
        description: 'Tính toán và phân tích carbon footprint của một doanh nghiệp',
        difficulty: 'Trung bình',
        procedure: [
          'Inventory tất cả emission sources',
          'Apply emission factors cho các activities',
          'Calculate Scope 1, 2, 3 emissions',
          'Identify reduction opportunities',
          'Estimate costs của mitigation measures',
          'Develop net-zero roadmap',
          'Compare với industry benchmarks',
        ],
      },
    ],
    realWorldApplications: [
      'Corporate sustainability reporting',
      'Carbon offset markets',
      'ESG investment criteria',
      'Climate risk assessment cho finance',
      'Green taxonomy và regulations',
    ],
    climateData: [
      {
        source: 'NASA GISS',
        type: 'Global temperature records',
        description: 'Monthly mean temperature anomalies since 1880',
        accessibility: 'Free public access',
      },
      {
        source: 'NOAA Global Monitoring Laboratory',
        type: 'Atmospheric CO2 concentrations',
        description: 'Mauna Loa CO2 measurements since 1958',
        accessibility: 'Free public access',
      },
    ],
    vietnamContext: {
      title: 'Chính sách và Kinh tế Khí hậu tại Việt Nam',
      content: [
        'Việt Nam đang trong quá trình xây dựng thị trường carbon trong nước, dự kiến vận hành thí điểm vào năm 2025 và chính thức vào năm 2028.',
        'Chính phủ đã ban hành nhiều chính sách ưu đãi để thu hút đầu tư vào năng lượng tái tạo, bao gồm cơ chế giá FIT (Feed-in Tariff) và các ưu đãi về thuế.',
        'Các ngân hàng thương mại tại Việt Nam đang bắt đầu phát hành "trái phiếu xanh" để huy động vốn cho các dự án thân thiện với môi trường.',
        'Các doanh nghiệp lớn như Vinamilk, FPT, REE đang ngày càng chú trọng đến báo cáo phát triển bền vững (ESG) để nâng cao uy tín và thu hút nhà đầu tư quốc tế.',
      ],
    },
    careerConnect: {
      name: 'Bà Phạm Thị Thanh Tùng',
      title: 'Chuyên gia Tài chính Xanh',
      company: 'Ngân hàng Phát triển Châu Á (ADB) tại Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=pham-thi-thanh-tung',
      quote:
        'Tài chính xanh là tương lai. Công việc của chúng tôi là thẩm định và tài trợ cho các dự án không chỉ hiệu quả về kinh tế mà còn phải bền vững về môi trường và xã hội. Đây là một lĩnh vực mới mẻ, đòi hỏi kiến thức liên ngành về tài chính, môi trường và chính sách công.',
    },
    quizzes: [
      {
        question: 'Thị trường carbon là gì?',
        options: [
          'Nơi mua bán than đá',
          'Một hệ thống kinh tế nơi các giấy phép phát thải khí nhà kính được mua bán',
          'Một loại thuế đánh vào sản phẩm carbon',
          'Một quỹ đầu tư vào công nghệ carbon',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thị trường carbon là một công cụ dựa trên thị trường để kiểm soát ô nhiễm bằng cách cung cấp các ưu đãi kinh tế cho việc giảm phát thải khí nhà kính. Các công ty có thể mua và bán các tín chỉ carbon.',
      },
      {
        question: 'ESG là viết tắt của cụm từ nào?',
        options: [
          'Economic, Social, Governance',
          'Environmental, Social, Governance',
          'Energy, Sustainability, Growth',
          'Environment, Society, Globe',
        ],
        correctAnswerIndex: 1,
        explanation:
          'ESG là viết tắt của Environmental (Môi trường), Social (Xã hội), và Governance (Quản trị). Đây là bộ ba tiêu chí được sử dụng để đánh giá mức độ bền vững và tác động đạo đức của một khoản đầu tư vào một công ty hoặc doanh nghiệp.',
      },
    ],
  },
];
