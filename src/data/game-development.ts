import { EDUCATIONAL_GAMES_DATA, EducationalGame } from './educationalGames';

export interface GameDevLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  technologies: string[];
  gameGenres: string[];
  resources: Resource[];
  caseStudies: CaseStudy[];
  careerOpportunities: string[];
  relatedGames?: (EducationalGame | undefined)[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'tool' | 'engine' | 'tutorial' | 'asset' | 'community';
  description: string;
}

interface CaseStudy {
  title: string;
  studio: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const gameDevLessons: GameDevLesson[] = [
  {
    id: 'game-design-fundamentals',
    title: 'Bài 1: Nguyên Tắc Cơ Bản về Thiết Kế Game',
    description:
      'Học các nguyên tắc cơ bản về thiết kế game: cơ chế, động lực, thẩm mỹ (MDA). Thiết kế vòng lặp gameplay và trải nghiệm người chơi để tạo ra các trò chơi hấp dẫn.',
    videoUrl: 'https://www.youtube.com/watch?v=G8AT01tuyrk',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '120 phút',
    gameGenres: ['Puzzle', 'Platformer', 'Adventure', 'Action'],
    objectives: [
      'Hiểu các nguyên tắc thiết kế game cốt lõi và khung MDA',
      'Thiết kế cơ chế và hệ thống gameplay hấp dẫn',
      'Tạo đường cong độ khó và hệ thống tiến trình cân bằng',
      'Triển khai các vòng lặp phản hồi và phần thưởng cho người chơi',
      'Phân tích các trò chơi thành công và rút ra các mẫu thiết kế',
    ],
    prerequisites: [
      'Đam mê chơi game và trải nghiệm tương tác',
      'Kỹ năng tư duy sáng tạo và giải quyết vấn đề cơ bản',
      'Hiểu biết về tâm lý người chơi',
      'Quen thuộc với các thể loại game khác nhau',
    ],
    technologies: [
      'Tài liệu Thiết kế Game (GDD)',
      'Tạo mẫu trên giấy (Paper Prototyping)',
      'Công cụ Thiết kế Kỹ thuật số (Figma, Miro)',
      'Công cụ Phân tích',
      'Nền tảng Thử nghiệm Người dùng',
      'Bảng tính Cân bằng Game',
    ],
    exercises: [
      {
        title: 'Thiết kế một Game Puzzle trên Di động',
        description:
          'Tạo một thiết kế game hoàn chỉnh cho một trò chơi giải đố trên di động với cơ chế độc đáo và chiến lược kiếm tiền',
        difficulty: 'Trung bình',
        solution:
          '# Thiết kế Game Puzzle Di động: Thác Pha Lê\\n\\n## 1. Ý tưởng & Vòng lặp Cốt lõi của Game\\n\\n### Ý tưởng Chính:\\nGame giải đố match-3 với chủ đề ma thuật nguyên tố, kết hợp lập kế hoạch chiến lược và phản xạ nhanh.\\n\\n### Vòng lặp Gameplay Cốt lõi (30-60 giây):\\n1. **Quét Bảng:** Người chơi quan sát trạng thái hiện tại\\n2. **Lên kế hoạch nước đi:** Xác định các kết hợp ghép tối ưu\\n3. **Thực hiện:** Thực hiện 3-5 nước đi tạo ra các chuỗi phản ứng\\n4. **Thu thập Phần thưởng:** Kiếm đá quý, vật phẩm tăng sức mạnh, tiến trình\\n5. **Đánh giá Tiến trình:** Kiểm tra trạng thái hoàn thành cấp độ\\n\\n### Vòng lặp Tiến trình Meta (5-10 phút):\\n1. **Hoàn thành Cấp độ:** Hoàn thành 3-5 cấp độ giải đố\\n2. **Mở khóa Nội dung:** Khu vực mới, nhân vật, khả năng\\n3. **Nâng cấp Hệ thống:** Cải thiện vật phẩm tăng sức mạnh và chỉ số\\n4. **Tiến trình Câu chuyện:** Thúc đẩy các yếu tố tường thuật\\n5. **Tính năng Xã hội:** Chia sẻ thành tích, cạnh tranh',
        requirements: [
          'Tạo Tài liệu Thiết kế Game toàn diện',
          'Xác định vòng lặp gameplay cốt lõi và tiến trình meta',
          'Thiết kế đường cong độ khó cân bằng',
          'Lên kế hoạch chiến lược kiếm tiền',
          'Bao gồm lộ trình triển khai kỹ thuật',
        ],
        hints: [
          'Nghiên cứu các game giải đố thành công như Candy Crush, Bejeweled',
          'Tập trung vào tâm lý và động lực của người chơi',
          'Cân bằng giữa thử thách và khả năng đạt được',
          'Xem xét khả năng tiếp cận và thiết kế toàn diện',
        ],
        expectedOutput:
          'Tài liệu thiết kế game hoàn chỉnh với tất cả các hệ thống được xác định và kế hoạch triển khai',
      },
    ],
    realWorldApplications: [
      'Các studio phát triển game di động',
      'Sáng tạo và phát hành game độc lập',
      'Thiết kế game giáo dục',
      'Gamification hóa các ứng dụng kinh doanh',
      'Thiết kế trải nghiệm thực tế ảo',
    ],
    careerOpportunities: [
      'Nhà thiết kế Game',
      'Nhà thiết kế Cấp độ',
      'Nhà thiết kế Tường thuật',
      'Nhà thiết kế Hệ thống',
      'Nhà thiết kế UX cho Game',
      'Nhà sản xuất Game',
    ],
    resources: [
      {
        title: 'Nghệ thuật Thiết kế Game của Jesse Schell',
        url: 'https://artofgamedesign.com',
        type: 'tutorial',
        description: 'Cuốn sách toàn diện bao gồm tất cả các khía cạnh của lý thuyết và thực hành thiết kế game',
      },
      {
        title: "Game Maker's Toolkit",
        url: 'https://www.youtube.com/c/MarkBrownGMT',
        type: 'tutorial',
        description: 'Kênh YouTube phân tích các nguyên tắc thiết kế game thông qua các trò chơi phổ biến',
      },
    ],
    caseStudies: [
      {
        title: 'Candy Crush Saga: Thiết kế dựa trên Tâm lý học',
        studio: 'King',
        challenge:
          'Tạo ra một game match-3 gây nghiện nhưng công bằng với chiến lược kiếm tiền bền vững trong thị trường cạnh tranh',
        solution:
          'Kết hợp cơ chế match-3 đã được chứng minh với các yếu tố kích thích tâm lý: mạng sống có giới hạn, áp lực xã hội và các đỉnh điểm độ khó được cân bằng cẩn thận tại các điểm kiếm tiền',
        results:
          'Doanh thu hàng năm hơn 1,5 tỷ đô la, hơn 250 triệu người dùng hoạt động hàng tháng, game di động có doanh thu cao nhất trong hơn 5 năm',
        insights: [
          'Hiểu biết về tâm lý người chơi là rất quan trọng để giữ chân và kiếm tiền',
          'Các tính năng xã hội khuếch đại sự tương tác và tăng trưởng lan truyền',
          'Độ khó cân bằng ngăn chặn sự thất vọng trong khi khuyến khích chi tiêu',
          'Cập nhật nội dung thường xuyên duy trì sự quan tâm của người chơi lâu dài',
        ],
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'scratch-animation-studio'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'game-dev-studio'),
    ],
  },
  {
    id: 'unity-2d-development',
    title: 'Bài 2: Phát triển Game 2D với Unity',
    description:
      'Thực hành phát triển Unity 2D: sprites, hoạt ảnh, vật lý, hệ thống UI. Tạo một game platformer 2D hoàn chỉnh từ ý tưởng đến triển khai.',
    videoUrl: 'https://www.youtube.com/watch?v=on9nwbZngyw',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '180 phút',
    gameGenres: ['Platformer', 'Side-scroller', 'Puzzle-platformer'],
    objectives: [
      'Nắm vững quy trình làm việc và quản lý tài sản trong Unity 2D',
      'Triển khai bộ điều khiển nhân vật với chuyển động mượt mà',
      'Tạo hệ thống camera đáp ứng và hình nền parallax',
      'Thiết kế hệ thống UI và menu tương tác',
      'Xây dựng một game hoàn chỉnh với nhiều cấp độ và tiến trình',
    ],
    prerequisites: [
      'Các khái niệm lập trình cơ bản (biến, hàm, vòng lặp)',
      'Cài đặt Unity và quen thuộc với giao diện cơ bản',
      'Hiểu biết về hệ tọa độ 2D',
      'Các nguyên tắc cơ bản về thiết kế game từ bài học trước',
    ],
    technologies: [
      'Unity 2022.3 LTS',
      'Lập trình C#',
      'Hệ thống Vật lý 2D',
      'Hệ thống Hoạt ảnh',
      'UI Toolkit',
      'Hệ thống Đầu vào',
    ],
    exercises: [
      {
        title: 'Xây dựng Game Platformer 2D "Crystal Runner"',
        description:
          'Tạo một game platformer 2D hoàn chỉnh với chuyển động nhân vật, vật phẩm thu thập, kẻ thù và tiến trình cấp độ',
        difficulty: 'Nâng cao',
        solution: `# Phát triển Game Platformer 2D Unity: "Crystal Runner"

## 1. Thiết lập & Kiến trúc Dự án

### Cấu trúc Dự án:
\`\`\`
Assets/
├── Scripts/
│   ├── Player/
│   ├── Enemies/
│   ├── Managers/
│   ├── UI/
│   └── Utils/
├── Sprites/
│   ├── Characters/
│   ├── Environment/
│   ├── UI/
│   └── Effects/
├── Animations/
├── Audio/
├── Scenes/
└── Prefabs/
\`\`\`

### Kiến trúc Hệ thống Cốt lõi:
- **GameManager:** Chuyển cảnh, trạng thái game, lưu/tải
- **PlayerController:** Xử lý đầu vào, chuyển động, hoạt ảnh
- **CameraController:** Theo dõi, giới hạn, chuyển tiếp mượt mà
- **LevelManager:** Mục tiêu, hoàn thành, tiến trình
- **AudioManager:** Nhạc, SFX, trộn âm thanh động
- **UIManager:** Menu, HUD, bố cục đáp ứng

## 2. Triển khai Bộ điều khiển Người chơi

### Hệ thống Chuyển động (C#):
\`\`\`csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveSpeed = 8f;
    public float jumpForce = 16f;
    public float coyoteTime = 0.2f;
    public float jumpBufferTime = 0.2f;
    
    [Header("Physics")]
    public LayerMask groundLayerMask;
    public Transform groundCheck;
    public float groundCheckRadius = 0.2f;
    
    // Private variables
    private Rigidbody2D rb;
    private Animator animator;
    private SpriteRenderer spriteRenderer;
    private AudioSource audioSource;
    
    private float horizontalInput;
    private bool jumpInput;
    private bool isGrounded;
    private float coyoteTimeCounter;
    private float jumpBufferCounter;
    
    // Animation hashes for performance
    private int speedHash;
    private int jumpHash;
    private int groundedHash;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
        spriteRenderer = GetComponent<SpriteRenderer>();
        audioSource = GetComponent<AudioSource>();
        
        // Cache animator parameter hashes
        speedHash = Animator.StringToHash("Speed");
        jumpHash = Animator.StringToHash("Jump");
        groundedHash = Animator.StringToHash("Grounded");
    }
    
    void Update()
    {
        HandleInput();
        CheckGrounded();
        HandleCoyoteTime();
        HandleJumpBuffer();
        HandleMovement();
        HandleJump();
        UpdateAnimations();
    }
    
    void HandleInput()
    {
        horizontalInput = Input.GetAxisRaw("Horizontal");
        
        if (Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.W))
        {
            jumpInput = true;
            jumpBufferCounter = jumpBufferTime;
        }
        else
        {
            jumpInput = false;
        }
    }
    
    void CheckGrounded()
    {
        bool wasGrounded = isGrounded;
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, groundLayerMask);
        
        // Landing sound effect
        if (!wasGrounded && isGrounded)
        {
            PlaySound("Land");
        }
    }
    
    void HandleCoyoteTime()
    {
        if (isGrounded)
        {
            coyoteTimeCounter = coyoteTime;
        }
        else
        {
            coyoteTimeCounter -= Time.deltaTime;
        }
    }
    
    void HandleJumpBuffer()
    {
        if (jumpBufferCounter > 0)
        {
            jumpBufferCounter -= Time.deltaTime;
        }
    }
    
    void HandleMovement()
    {
        // Horizontal movement với smooth acceleration
        float targetVelocity = horizontalInput * moveSpeed;
        rb.velocity = new Vector2(
            Mathf.MoveTowards(rb.velocity.x, targetVelocity, moveSpeed * 2 * Time.deltaTime),
            rb.velocity.y
        );
        
        // Sprite flipping
        if (horizontalInput != 0)
        {
            spriteRenderer.flipX = horizontalInput < 0;
        }
    }
    
    void HandleJump()
    {
        // Jump with coyote time và buffer
        if (jumpBufferCounter > 0 && coyoteTimeCounter > 0)
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
            jumpBufferCounter = 0;
            coyoteTimeCounter = 0;
            
            PlaySound("Jump");
            
            // Particle effect
            PlayJumpEffect();
        }
        
        // Variable jump height
        if (Input.GetKeyUp(KeyCode.Space) && rb.velocity.y > 0)
        {
            rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
        }
    }
    
    void UpdateAnimations()
    {
        animator.SetFloat(speedHash, Mathf.Abs(rb.velocity.x));
        animator.SetBool(jumpHash, !isGrounded && rb.velocity.y > 0.1f);
        animator.SetBool(groundedHash, isGrounded);
    }
    
    void PlaySound(string soundName)
    {
        // Implementation would load và play audio clip
        AudioManager.Instance.PlaySFX(soundName);
    }
    
    void PlayJumpEffect()
    {
        // Instantiate particle effect
        EffectManager.Instance.PlayEffect("JumpDust", groundCheck.position);
    }
    
    void OnDrawGizmosSelected()
    {
        // Visualize ground check trong Scene view
        if (groundCheck != null)
        {
            Gizmos.color = isGrounded ? Color.green : Color.red;
            Gizmos.DrawWireSphere(groundCheck.position, groundCheckRadius);
        }
    }
}
\`\`\`

## 3. Triển khai Hệ thống Camera

### Bộ điều khiển Camera Động:
\`\`\`csharp
public class CameraController : MonoBehaviour
{
    [Header("Target Settings")]
    public Transform target;
    public Vector3 offset = new Vector3(0, 2, -10);
    
    [Header("Follow Settings")]
    public float smoothTime = 0.3f;
    public bool lookAhead = true;
    public float lookAheadDistance = 3f;
    public float lookAheadSmoothTime = 1f;
    
    [Header("Boundaries")]
    public Vector2 minBounds;
    public Vector2 maxBounds;
    
    private Vector3 velocity = Vector3.zero;
    private float lookAheadPos;
    private float lookAheadVelocity;
    private PlayerController playerController;
    
    void Start()
    {
        playerController = target.GetComponent<PlayerController>();
    }
    
    void LateUpdate()
    {
        if (target == null) return;
        
        Vector3 targetPosition = target.position + offset;
        
        // Look ahead system
        if (lookAhead)
        {
            float playerInputX = Input.GetAxisRaw("Horizontal");
            float targetLookAhead = playerInputX * lookAheadDistance;
            
            lookAheadPos = Mathf.SmoothDamp(
                lookAheadPos, 
                targetLookAhead, 
                ref lookAheadVelocity, 
                lookAheadSmoothTime
            );
            
            targetPosition.x += lookAheadPos;
        }
        
        // Apply boundary constraints
        targetPosition.x = Mathf.Clamp(targetPosition.x, minBounds.x, maxBounds.x);
        targetPosition.y = Mathf.Clamp(targetPosition.y, minBounds.y, maxBounds.y);
        
        // Smooth camera movement
        transform.position = Vector3.SmoothDamp(
            transform.position, 
            targetPosition, 
            ref velocity, 
            smoothTime
        );
    }
}
\`\`\`

## 4. Triển khai Hệ thống Game

### Hệ thống Vật phẩm Thu thập:
\`\`\`csharp
public class Crystal : MonoBehaviour
{
    [Header("Settings")]
    public int pointValue = 10;
    public AudioClip collectSound;
    public GameObject collectEffect;
    
    private bool isCollected = false;
    
    void Start()
    {
        // Idle animation
        StartCoroutine(FloatAnimation());
    }
    
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player") && !isCollected)
        {
            CollectCrystal();
        }
    }
    
    void CollectCrystal()
    {
        isCollected = true;
        
        // Update game manager
        GameManager.Instance.AddScore(pointValue);
        GameManager.Instance.CollectCrystal();
        
        // Visual và audio feedback
        if (collectEffect != null)
        {
            Instantiate(collectEffect, transform.position, Quaternion.identity);
        }
        
        AudioManager.Instance.PlaySFX("Crystal");
        
        // Animate collection
        StartCoroutine(CollectAnimation());
    }
    
    IEnumerator FloatAnimation()
    {
        Vector3 startPos = transform.position;
        
        while (!isCollected)
        {
            float newY = startPos.y + Mathf.Sin(Time.time * 2f) * 0.3f;
            transform.position = new Vector3(startPos.x, newY, startPos.z);
            transform.Rotate(0, 0, 90 * Time.deltaTime);
            yield return null;
        }
    }
    
    IEnumerator CollectAnimation()
    {
        float timer = 0f;
        Vector3 startPos = transform.position;
        Vector3 targetPos = startPos + Vector3.up * 2f;
        
        while (timer < 0.5f)
        {
            timer += Time.deltaTime;
            float progress = timer / 0.5f;
            
            transform.position = Vector3.Lerp(startPos, targetPos, progress);
            transform.localScale = Vector3.Lerp(Vector3.one, Vector3.zero, progress);
            
            yield return null;
        }
        
        Destroy(gameObject);
    }
}
\`\`\`

## 5. Thiết kế Cấp độ & Tiến trình

### Cấu trúc Cấp độ:
- **Cấp độ Hướng dẫn:** Chuyển động và nhảy cơ bản
- **Cấp độ 1-3:** Giới thiệu cơ chế cốt lõi
- **Cấp độ 4-6:** Thử thách platforming
- **Cấp độ 7-9:** Đối đầu với kẻ thù
- **Cấp độ 10:** Đấu trùm và kết thúc câu chuyện

### Nguyên tắc Thiết kế:
1. **Giới thiệu:** Cơ chế mới trong môi trường an toàn
2. **Phát triển:** Thực hành cơ chế với độ phức tạp tăng dần
3. **Biến tấu:** Kết hợp với các cơ chế trước đó
4. **Kết luận:** Thử thách ở cấp độ bậc thầy

### Chỉ số Hoàn thành Cấp độ:
- **Mục tiêu Chính:** Đến được cổng cuối
- **Mục tiêu Phụ:** Thu thập tất cả các viên pha lê, hoàn thành dưới giới hạn thời gian
- **Hệ thống Đánh giá Sao:** 1-3 sao dựa trên tiêu chí hoàn thành

## 6. Âm thanh & Đánh bóng

### Triển khai Âm thanh:
- **Nhạc Thích ứng:** Cường độ thay đổi dựa trên trạng thái người chơi
- **Âm thanh Không gian:** Hiệu ứng âm thanh được định vị 3D
- **Trộn Âm thanh:** Cân bằng âm lượng động
- **Khả năng Tiếp cận:** Biểu diễn trực quan của các tín hiệu âm thanh

### Các yếu tố "Juice" & Đánh bóng:
- **Rung màn hình:** Hiệu ứng va chạm khi hạ cánh, bị sát thương
- **Hệ thống Hạt:** Mây bụi, lấp lánh, vụ nổ
- **Hoạt ảnh UI:** Chuyển tiếp mượt mà, các nút bấm nảy
- **Phản hồi Tức thì:** Mọi hành động đều có phản hồi ngay lập tức

## 7. Triển khai & Xuất bản

### Cài đặt Build:
- **Nền tảng Mục tiêu:** PC (Windows, Mac, Linux)
- **Độ phân giải:** 1920x1080 với hỗ trợ co giãn
- **Cài đặt Chất lượng:** Tối ưu hóa cho các phần cứng khác nhau
- **Hỗ trợ Đầu vào:** Bàn phím và gamepad

### Danh sách Kiểm tra Xuất bản:
- [ ] Tất cả các cấp độ đã được kiểm tra và cân bằng
- [ ] Mức âm thanh được trộn đúng cách
- [ ] Hiệu suất được tối ưu hóa (60+ FPS)
- [ ] Hệ thống lưu đã được triển khai
- [ ] Menu cài đặt hoạt động
- [ ] Thông tin tín dụng và pháp lý được bao gồm

### Tùy chọn Phân phối:
- **Steam:** Phát hành trả phí ($9.99-$14.99)
- **Itch.io:** Nền tảng thân thiện với nhà phát triển độc lập
- **Game Jolt:** Miễn phí với quyên góp tùy chọn
- **Cổng di động:** Phiên bản iOS/Android`,
        requirements: [
          'Thiết lập dự án Unity với cấu trúc thư mục phù hợp',
          'Triển khai bộ điều khiển nhân vật mượt mà bằng C#',
          'Tạo hệ thống camera đáp ứng',
          'Thiết kế ít nhất 3 cấp độ hoàn chỉnh',
          'Thêm âm thanh, hoạt ảnh và đánh bóng hình ảnh',
        ],
        hints: [
          'Sử dụng hiệu quả hệ thống vật lý 2D tích hợp của Unity',
          'Lên kế hoạch kiến trúc mã của bạn trước khi triển khai',
          'Kiểm tra cảm giác chuyển động của người chơi một cách rộng rãi',
          'Nghiên cứu các trò chơi tham khảo để lấy cảm hứng',
        ],
        expectedOutput:
          'Một game platformer 2D có thể chơi được với nhiều cấp độ, gameplay được đánh bóng và cảm giác game phù hợp',
      },
    ],
    realWorldApplications: [
      'Phát triển game di động 2D',
      'Phát hành game độc lập',
      'Nội dung tương tác giáo dục',
      'Phát triển nguyên mẫu cho các dự án lớn hơn',
      'Các sản phẩm trong portfolio để ứng tuyển vào ngành game',
    ],
    careerOpportunities: [
      'Nhà phát triển Unity',
      'Lập trình viên Game 2D',
      'Nhà phát triển Game Độc lập',
      'Nhà phát triển Game Di động',
      'Nhà thiết kế Game Kỹ thuật',
      'Lập trình viên Công cụ',
    ],
    resources: [
      {
        title: 'Nền tảng Học tập Unity',
        url: 'https://learn.unity.com',
        type: 'tutorial',
        description: 'Các hướng dẫn chính thức của Unity bao gồm phát triển 2D, kịch bản C# và thiết kế game',
      },
      {
        title: 'Kênh YouTube Brackeys',
        url: 'https://www.youtube.com/c/Brackeys',
        type: 'tutorial',
        description: 'Các hướng dẫn Unity chất lượng cao cho người mới bắt đầu và nhà phát triển trung cấp',
      },
    ],
    caseStudies: [
      {
        title: 'Hollow Knight: Đánh bóng & Bầu không khí trong 2D',
        studio: 'Team Cherry',
        challenge: 'Tạo ra một game Metroidvania 2D có không khí với ngân sách hạn chế và đội ngũ nhỏ (3 người)',
        solution:
          'Tập trung vào hướng nghệ thuật đặc biệt, điều khiển chặt chẽ và âm thanh có không khí. Sử dụng hoạt ảnh vẽ tay và thiết kế thế giới được chế tác cẩn thận.',
        results:
          'Bán được hơn 3 triệu bản, 97% đánh giá tích cực trên Steam, được coi là một tác phẩm kinh điển hiện đại trong thể loại Metroidvania',
        insights: [
          'Sự đánh bóng và chú ý đến chi tiết có thể khắc phục những hạn chế về ngân sách',
          'Hướng nghệ thuật mạnh mẽ tạo ra trải nghiệm đáng nhớ',
          'Điều khiển chặt chẽ là nền tảng của các game platformer tuyệt vời',
          'Âm thanh có không khí khuếch đại đáng kể tác động cảm xúc',
        ],
      },
    ],
    relatedGames: [
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'unity-2d-development'),
      EDUCATIONAL_GAMES_DATA.find((game) => game.id === 'game-dev-studio'),
    ],
  },
];
